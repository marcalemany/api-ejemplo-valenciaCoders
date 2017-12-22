var libros = require('../modelos/libros');
var sequelize = require('sequelize');

var _sequelize = new sequelize('libros','root','123456',{
  host:'192.168.1.186',
  dialect:'mysql',
  pool: {
    max:5,
    min:0,
    idle:10000
    }
});

function libroCtrl(req, res, next)
{
  var _libros = new libros(_sequelize)


  this.addBook = function(){
    var libro = req.body;
    this.createBook = _libros.create({
      title : libro.title,
      autor : libro.autor
    }).then(function(err){
      res.status(403).send();
    });
  };

  this.getALL = function(){
    _libros.findAll()
    .then(function(data){
      res.status(200).jsonp(data);
    })
  };

  this.deleteBook = function(){
    _libros.destroy({where :{id:req.params.id}})
    .then(function(){
      res.status(204).send();
    })
    .error(function(){
      res.status(403).send();
    })
  };

  this.updateBookById = function()
  {
    _libros.findById(req.params.id)
    .then(function(book){
      book.title = req.body.title;
      book.autor = req.body.autor;
      book.save()
      .then(function(result){
        res.status(200).jsonp(result)
      }).error(function(err){
        res.status(403).send();
      })
    }). error(function(error){
      res.status(403).send();
    })
  }
}

module.exports = libroCtrl;

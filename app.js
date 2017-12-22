var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override");
libCtrl = require ('./controladores/libroCtrl');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());


var router = express.Router();


//Confirmamos si el servidor está conectado

router.get('/', function(req,res){
  res.send("Yeeeaaaaahhhh estoy en marcha");
});

//Solicitud para que nos devuelva los datos
router.get('/libros/',function (req,res, next){
  var _librosCtrl = new libCtrl(req,res,next);
    _librosCtrl.getALL();
});

//Solicitud para que nos devuelva los datos, concretando
router.get('/libros/:id',function(req,res){
  res.status(200).jsonp(libros[req.params.id]);
})

//Añadimos un registro
router.post('/libros/', function(req, res, next){
    var _librosCtrl = new libCtrl(req, res, next);
    _librosCtrl.addBook();
});

//Modificamos un registro
router.put('/libros/:id', function (req, res, next){
  console.log("PUT LIBROS");
  var _librosCtrl = new libCtrl(req,res,next);
  _librosCtrl.updateBookById();
});

//Eliminamos un registro
router.delete('/libros/:id', function(req, res, next){
  var _librosCtrl = new libCtrl(req,res,next);
  _librosCtrl.deleteBook();
})

app.use(router);

app.listen(3000, function(){
  console.log("Yeeeaaaahhh nuestro primer servidor")
});

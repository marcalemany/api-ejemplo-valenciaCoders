var sequelize = require('sequelize');

module.exports = function(sequelize){
  var libros = sequelize.define('libros',{
    title:{
      type: sequelize.STRING,
      field: 'title'
    },
    author:{
      type: sequelize.STRING,
      field: 'author'
    }
  });

  return libros;
}

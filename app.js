var express = require("express"),
app = express(),
bodyParser=require("body-parser"),
methodOverride=require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router=express.Router();

var libros=[
  {
    "id":0,
    "title":"El señor de los anillos",
    "author":"J.R.R. TOLKIEN"
  },
  {
    "id":1,
    "title":"Jim Boton y Lucas el maquinista",
    "author":"M. ENDER"
  },
  {
    "id":2,
    "title":"Juego de Tronos",
    "author":"G.R. MARTIN"
  },
  {
    "id":3,
    "title":"El Perfume",
    "author":"P. SUSKIND"
  },
]

router.get('/', function(req,res){
  res.send("Yeeeeaaaaaaaahhhh, estoy en marcha");
});

router.get('/pringaillo/:nombre', function(req,res){
  var nombre=req.params.nombre;
  res.send("Yeeeeaaaaaahhhh, pringaillo, " + nombre);
});

router.get('/libros/', function (req,res){
  res.status(200).jsonp(libros);
});

router.get('/libros/:id', function (req,res){
  res.status(200).jsonp(libros[req.params.id]);
});

router.post('/libros/', function (req,res){
  var libro= req.body;
  libros.push(libro);
  res.status(200).jsonp(libros);
});

router.put('/libros/:id', function (req,res){
  var id_libro= req.params.id;
  var libro= req.body;

  libros.forEach(function (elemento, indice, array){

    if(indice==id_libro){
    console.log("localizado ->"+elemento.title);
    elemento.title=libro.title;
    elemento.author=libro.author;
}
  })
  res.status(200).jsonp(libros);
});

router.post('/pringaillo', function (req,res){
  var info= req.body.name;
  console.log(info);
  res.status(200).send();
});

app.use(router);

app.listen(80, function(){
  console.log("¡¡¡Nuestro primer servidor!!!")
});

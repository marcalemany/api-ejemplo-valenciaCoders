var express = require("express"),
app = express(),
bodyParser=require("body-parser"),
methodOverride=require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router=express.Router();



router.get('/', function(req,res){
  res.send("Yeeeeaaaaaaaahhhh, estoy en marcha");
});

router.get('/pringaillo', function(req,res){
  res.send("Yeeeeaaaaaaaahhhh, pringaillo!");
});

app.use(router);

app.listen(80, function(){
  console.log("¡¡¡Nuestro primer servidor!!!")
});

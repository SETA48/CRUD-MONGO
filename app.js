var express = require('express');
global.app = express();
global.config = require('./config.js').config;
const mongoose = require('mongoose')

var bodyParser = require('body-parser');
const { config } = require('./config.js');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.all('*',function(req, res, next){

    var whitelist = req.headers.origin;
 
    res.header('Access-Control-Allow-Origin', whitelist);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
    res.header('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.header("Access-Control-Allow-Credentials", "true");
    //res.header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
 
    next();

});

mongoose.connect('mongodb://127.0.0.1:27017/' + config.nombrebd,
{useNewUrlParser:true,useUnifiedTopology:true},
(error,response) => {
if(error){
    console.log(error)
}
else{
    console.log('Conexion a mongo correcta')
}

})



require('./Routes/rutas.js')


app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto:' + config.puerto )

})

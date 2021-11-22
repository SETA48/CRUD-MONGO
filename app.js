var express = require('express');
global.app = express();
global.config = require('./config.js').config;

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./Routes/rutas.js')


app.listen(config.puerto,function(){
    console.log('servidor funcionando por el puerto:' + config.puerto )

})

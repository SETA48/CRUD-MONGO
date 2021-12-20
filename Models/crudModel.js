var crudModel = {};
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var ContactosSchema = new Schema({
    nombre:String,
    apellido:String,
    correo:String
})

const MyModel = mongoose.model('Contactos',ContactosSchema)


var datos = [];

crudModel.guardar = function(contacto,callback){

    const instancia = new MyModel
    instancia.nombre = contacto.nombre
    instancia.apellido = contacto.apellido
    instancia.correo = contacto.correo

    instancia.save((error,contactoguardado) => {
        if(error){
            console.log(error)
            return callback({estate:false,info:error})
        }
        else
        {
            console.log(contactoguardado)
            return callback({state:true,info:contactoguardado})
        }
    })
    // datos.push(contacto);
    // return callback({state:true,mensaje:'Contacto Registrado Satisfactoriamente'})
}

crudModel.listar = function(post,callback){

    MyModel.find({},{__v:0},(error,registros) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,data:registros})
        }
    })


    // return callback({state:true,data:datos})
}

crudModel.listarid = function(post,callback){

    MyModel.find({_id:post.id},{__v:0},(error,registros) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,data:registros})
        }
    })


    // return callback({state:true,data:datos})
}

crudModel.modificar = function(contacto,callback){

    MyModel.findByIdAndUpdate(contacto.id,{
        nombre:contacto.nombre,
        apellido:contacto.apellido,
        correo:contacto.correo
    },(error,contactomodificado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,mensaje:'Contacto Modificado'})
        }
    })



    // datos[contacto.posicion] = (contacto)
    // return callback({state:true,mensaje:'Contacto Modificado'})
}

crudModel.eliminar = function(contacto,callback){

    MyModel.findByIdAndDelete(contacto.id,(error,eliminado) => {
        if(error){
            return callback({state:false,info:error})
        }
        else{
            return callback({state:true,mensaje:'Contacto Eliminado'})
        }
    })


    // datos.splice(contacto.posicion,1)
    // return callback({state:true,mensaje:'Contacto Eliminado'})
}

module.exports.crud = crudModel;
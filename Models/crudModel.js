var crudModel = {};


var datos = [];

crudModel.guardar = function(contacto,callback){
    datos.push(contacto);
    return callback({state:true,mensaje:'Contacto Registrado Satisfactoriamente'})
}

crudModel.listar = function(post,callback){
    return callback({state:true,data:datos})
}

crudModel.modificar = function(contacto,callback){
    datos[contacto.posicion] = (contacto)
    return callback({state:true,mensaje:'Contacto Modificado'})
}

crudModel.eliminar = function(contacto,callback){
    datos.splice(contacto.posicion,1)
    return callback({state:true,mensaje:'Contacto Eliminado'})
}

module.exports.crud = crudModel;
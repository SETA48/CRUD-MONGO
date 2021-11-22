var crudModel = require('../Models/crudModel.js').crud
var crudController = {};

crudController.guardar = function(request,response){
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var telefono = request.body.telefono;


    if(nombre == undefined || nombre == null || nombre == ''){
        response.json({state:false,mensaje:'El campo nombre es obligatorio'})
        return false;
    }

    if(apellido == undefined || apellido == null || apellido == ''){
        response.json({state:false,mensaje:'El campo apellido es obligatorio'})
        return false;
    }

    if(telefono == undefined || telefono == null || telefono == ''){
        response.json({state:false,mensaje:'El campo telefono es obligatorio'})
        return false;
    }

    var contacto = {
        nombre:nombre,
        apellido:apellido,
        telefono:telefono
    }


    crudModel.guardar(contacto,function(respuesta){
        response.json(respuesta)
    })
}

crudController.listar = function(request,response){
    crudModel.listar(null,function(res){
        response.json(res)
    })
}

crudController.modificar = function(request,response){
    var posicion = request.body.posicion;
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var telefono = request.body.telefono;

    if(posicion == undefined || posicion == null || posicion == ''){
        response.json({state:false,mensaje:'El campo posicion en obligatorio'})
        return false;
    }

    if(nombre == undefined || nombre == null || nombre == ''){
        response.json({state:false,mensaje:'El campo nombre en obligatorio'})
        return false;
    }

    if(apellido == undefined || apellido == null || apellido == ''){
        response.json({state:false,mensaje:'El campo apellido en obligatorio'})
        return false;
    }

    if(telefono == undefined || telefono == null || telefono == ''){
        response.json({state:false,mensaje:'El campo telefono en obligatorio'})
        return false;
    }

    var contacto = {
        posicion:posicion,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono
    }

    crudModel.modificar(contacto,function(respuesta){
        response.json(respuesta)
    })
}

crudController.eliminar = function(request,response){
    var posicion = request.body.posicion;
    

    if(posicion == undefined || posicion == null || posicion == ''){
        response.json({state:false,mensaje:'El campo posicion en obligatorio'})
        return false;
    }

    var contacto = {
        posicion:posicion
    }

    crudModel.eliminar(contacto,function(respuesta){
        response.json(respuesta)
    })
}

module.exports.crud = crudController
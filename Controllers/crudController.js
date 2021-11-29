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

crudController.listarid = function(request,response){
    var post = {
        id:request.body.id
    }

    if(post.id == undefined || post.id == null || post.id == ''){
        response.json({state:false,mensaje:'El campo id es obligatorio'})
        return false;
    }

    crudModel.listarid(post,function(res){
        response.json(res)
    })
}

crudController.modificar = function(request,response){
    var id = request.body.id;
    var nombre = request.body.nombre;
    var apellido = request.body.apellido;
    var telefono = request.body.telefono;

    if(id == undefined || id == null || id == ''){
        response.json({state:false,mensaje:'El campo id en obligatorio'})
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
        id:id,
        nombre:nombre,
        apellido:apellido,
        telefono:telefono
    }

    crudModel.modificar(contacto,function(respuesta){
        response.json(respuesta)
    })
}

crudController.eliminar = function(request,response){
    var id = request.body.id;
    

    if(id == undefined || id == null || id == ''){
        response.json({state:false,mensaje:'El campo id en obligatorio'})
        return false;
    }

    var contacto = {
        id:id
    }

    crudModel.eliminar(contacto,function(respuesta){
        response.json(respuesta)
    })
}

module.exports.crud = crudController
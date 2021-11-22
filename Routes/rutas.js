var crudC = require('../Controllers/crudController.js').crud


app.post('/contactos/guardar',function(request,response){
    crudC.guardar(request,response)

})

app.post('/contactos/listar',function(request,response){
    crudC.listar(request,response)
    
})

app.post('/contactos/modificar',function(request,response){
    crudC.modificar(request,response)
    
})

app.post('/contactos/eliminar',function(request,response){
    crudC.eliminar(request,response)
    
})
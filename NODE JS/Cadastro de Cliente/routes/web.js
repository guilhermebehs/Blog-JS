var controller = require('../controller/clienteController');


module.exports = function(app){

   app.get('/', function(req,res){
   	
        controller.retornarTodos(req,res);     
   });

  app.get('/cadastro',function(req,res){

        res.render("cadastro",{dados:{}});
        
  	
  });

  app.post('/cadastro',function(req,res){
  	
        controller.criar(req,res);
        
  	
  });


};
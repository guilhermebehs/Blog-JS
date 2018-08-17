var controller = require('../controller/clienteController');
var postagemController = require('../controller/postagemController');



module.exports = function(app){

   app.get('/', function(req,res){
   	
        controller.retornarTodos(req,res);     
   });

  app.get('/cadastro',function(req,res){

        res.render("cadastro",{dados:{}});
        
  	
  });
   
  app.get('/novapostagem',function(req,res){

        res.render("novapostagem",{dados:{}});
        
  	
  }); 
    app.post('/novapostagem',function(req,res){
        
       postagemController.criar(req,res);
  	
  }); 

  app.post('/cadastro',function(req,res){
  	
        controller.criar(req,res);
        
  	
  });


};

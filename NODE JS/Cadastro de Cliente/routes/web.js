var controller = require('../controller/clienteController');
var postagemController = require('../controller/postagemController');
var existeSessao = require('../config/util');



module.exports = function(app){

  app.get('/', function(req,res){
      if(existeSessao(req))
          res.render("home");
      else  
         res.render("index");
        
  });

  app.post('/', function(req,res){
       if(existeSessao(req))
          controller.retornar(req, res);
        else
           res.render("index");
  });

   app.get('/home', function(req,res){
         
   	  if(existeSessao(req))
         postagemController.retornarTodos(req,res);    
      else  
         res.render("index");
         
   });

  app.get('/cadastro',function(req,res){

        if(existeSessao(req))
           res.render("cadastro",{dados:{}});
        else
           res.render("index");
  	
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

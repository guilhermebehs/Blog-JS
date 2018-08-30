var controller = require('../controller/clienteController');
var postagemController = require('../controller/postagemController');
var existeSessao = require('../config/util');



module.exports = function(app){

  app.get('/', function(req,res){
      if(existeSessao(req))
          postagemController.retornarTodos(req,res);
       else
         res.render('index');
          
        
  });

  app.post('/', function(req,res){
          if(req.body.email && req.body.senha)
             controller.retornar(req, res);
          else
              res.render('index'); 
             
  });

   app.get('/home', function(req,res){ 
       if(existeSessao(req))   
          postagemController.retornarTodos(req,res);
        else
          res.render('index');      
         
   });

  app.get('/cadastro',function(req,res){

        if(existeSessao(req))
           res.render("cadastro",{dados:{}});
        else
          res.render('index');

  });
   
  app.get('/novapostagem',function(req,res){
      if(existeSessao(req))
         res.render("novapostagem",{dados:{}});
      else
          res.render('index');
  }); 
    app.post('/novapostagem',function(req,res){
        if(existeSessao(req))
           postagemController.criar(req,res);

  	
  }); 

  app.post('/cadastro',function(req,res){
  	
        controller.criar(req,res);
        
  	
  });


};

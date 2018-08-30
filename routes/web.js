var clienteController = require('../controller/clienteController');
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
              clienteController.retornar(req, res);
          else
              res.render('index'); 
             
  });

   app.get('/home', function(req,res){ 
       if(existeSessao(req))   
          postagemController.retornarTodos(req,res);
        else
          res.render('index');      
         
   });

  app.get('/NovoUsuario',function(req,res){

        if(existeSessao(req))
           res.render("NovoUsuario",{dados:{}});
        else
          res.render('index');

  });



app.post('/NovoUsuario',function(req,res){

    clienteController.criar(req,res);

});
   
  app.get('/NovaPostagem',function(req,res){
      if(existeSessao(req))
         res.render("NovaPostagem",{dados:{}});
      else
          res.render('index');
  });

    app.post('/NovaPostagem',function(req,res){
        if(existeSessao(req))
           postagemController.criar(req,res);
    });

};

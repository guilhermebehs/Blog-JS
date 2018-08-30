var base = require('../model/clienteModel');
var pController=require('./postagemController');
var http = require('http');



module.exports.retornar = function(req,res){
   var dados = req.body;
   base.get(dados,function(erro, resultado){
       if(erro)
          console.log("Ocorreu um erro:  "+erro);
       else{
          if(Object.keys(resultado).length == 0)
             console.log("Dados Inválidos");
           else{
             req.session.usuario = resultado[0];
             pController.retornarTodos(req,res); 
           }
               
       	 }  

   });

}; 


module.exports.criar = function(req,res){
   var dados = req.body;
   console.log(dados);
   base.save(dados,function(erro, resultado){
   	  if(erro)
   	  	 console.log(erro);
      res.render('resposta');
   });
   
};

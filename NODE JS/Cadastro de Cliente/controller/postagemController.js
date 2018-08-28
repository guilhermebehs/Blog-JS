var base = require('../model/postagemModel');
var existeSessao = require('../config/util');


module.exports.retornarTodos = function(req,res){
     var sessao = req.session;
     base.getAll(sessao.usuario,function(erro, resultado){
         if(erro)
            console.log("Ocorreu um erro:  "+erro);
         else
         	  res.render('home', {postagens:resultado, erros:{}});

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

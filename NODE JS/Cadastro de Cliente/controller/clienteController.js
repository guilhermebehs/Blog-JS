var base = require('../model/clienteModel');



module.exports.retornarTodos = function(req,res){

   base.getAll(function(erro, resultado){
       if(erro)
          console.log("Ocorreu um erro");
       else
       	  res.render('home', {dados:resultado, erros:{}});

   });

}; 


module.exports.criar = function(req,res){
   var dados = req.body;
   base.save(dados,function(){
      res.render('resposta');
   };
   
};

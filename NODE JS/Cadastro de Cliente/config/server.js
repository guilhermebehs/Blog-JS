module.exports = function(){

   var express = require('express');
   var bodyParser = require('body-parser');
   var expressValidator = require('express-validator');
   var aplicacao = express();
   
   aplicacao = express();
   aplicacao.set('view engine', 'ejs');
   aplicacao.set('views', './view');
   aplicacao.use(bodyParser.json());
   aplicacao.use(bodyParser.urlencoded({extended:true}));
   aplicacao.use(expressValidator());
   
   var rotas = require('../routes/web');
   rotas(aplicacao);
   aplicacao.listen(8000, console.log('Escutando na porta 8000'));
    

};
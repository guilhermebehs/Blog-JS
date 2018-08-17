var conexao = require('../config/database')();


module.exports.getAll= 
    function(destino){

      return conexao.query("select * from postagem", destino);

    };


module.exports.get= 
    function(id,destino){

      return conexao.query("select * from postagem where id=?",id, destino);

    };

module.exports.save= 
    function(postagem,destino){
      return conexao.query("insert into postagem set ?",postagem, destino);

    };


module.exports.update= 
    function(postagem,destino){

      return conexao.query("update postagem set ?",postagem, destino);

    };

module.exports.delete= 
    function(id,destino){

      return conexao.query("delete from postagem where id=?",id, destino);

    };                

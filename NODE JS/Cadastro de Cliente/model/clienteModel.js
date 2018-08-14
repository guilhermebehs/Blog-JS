var conexao = require('../config/database')();


module.exports.getAll= 
    function(destino){

      return conexao.query("select * from cliente", destino);

    };


module.exports.get= 
    function(id,destino){

      return conexao.query("select * from cliente where id=?",id, destino);

    };

module.exports.save= 
    function(cliente,destino){
      return conexao.query("insert into cliente set ?",cliente, destino);

    };


module.exports.update= 
    function(cliente,destino){

      return conexao.query("update cliente set ?",cliente, destino);

    };

module.exports.delete= 
    function(id,destino){

      return conexao.query("delete from cliente where id=?",id, destino);

    };                



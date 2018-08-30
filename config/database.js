var mysql = require('mysql');


var conexao = function(){

	return mysql.createConnection({

		host:'localhost',
		user:'root',
		password:'210393',
        database:'estudo'
	});
};

module.exports = conexao;
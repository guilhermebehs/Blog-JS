module.exports = function existeSessao(req){
                  if(req.session.usuario)
                     return true;
                  else
                     return false;	
              };

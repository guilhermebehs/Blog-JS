module.exports = function existeSessao(req){
                  if(req.sessao)
                     return true;
                  else
                     return false;	
              };

const boom = require('@hapi/boom');

const config = require('../config/config');

function checkApiKey(req, res, next){
  const apikey = req.headers['api'];
if (apikey ===  config.apikey){
  next();
}else{
  next(boom.unauthorized());
}
};

function checkAdminRole(req, res, next) {
    const user = req.user;
    if(user.role === 'admin'){
      next();
    }else{
      next(boom.unauthorized());
    }
  }


function checkRoles(...roles){
  return(req, res, next)=>{
    const user = req.user;
    if(roles.includes(user.role)){
      next();

    }else{
      next(boom.unauthorized());
    }
  };
}
/*function checkRoles(roles) {

  return (req, res, next) => {
      const user = req.user;
      //Check if rol is allowed to access
      if (!roles.includes(user.role)) {
          next(boom.unauthorized("Unauthorized!You cannot do this, Admins have been notified "));
      } else {
          //If everything is right, go to next middleware
          next();
      }
  }
}*/

module.exports = { checkApiKey, checkRoles, checkAdminRole};

const {ClientError}=require('../utils/errors')

module.exports=(req,res,next)=>{
 const {name}=req.body

 if(name)return next();
 else throw new ClientError("Falta el nombre del planeta a crear", 401)
}
//Esta fn hay que agregarla a la ruta
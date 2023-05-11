//FUNCIONES de orden superior= fn que resibe por parametro otra fn, la mejora o modifica y la retorna modificada, eso es una fn de orden superior.

module.exports=(fn)=>{//fn es el controllers
    return function(req,res,next){
        // devuelve una promesa
        fn(req,res).catch((err)=>{
            next(err);//next del error: hay un error saltemos al manejador de errores de express, se hace asi porque express maneja errores pero sincronos. 
        })
    }
}
// module.exports=(fn)=>(req,res,next)=>fn(req,res).catch((err)=>next(err))
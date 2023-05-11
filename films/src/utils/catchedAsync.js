module.exports=(fn)=>{//fn es el controllers
    return function(req,res,next){
        // devuelve una promesa
        fn(req,res).catch((err)=>{
            next(err);//next del error: hay un error saltemos al manejador de errores de express, se hace asi porque express maneja errores pero sincronos. 
        })
    }
}
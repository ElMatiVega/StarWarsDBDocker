const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets",require("./routes"));

//vamos a ser que devuelva una respuesta ante la falta de respuesta a la peticion
server.use("*",(req,res)=>{
    res.status(404).send("Not found")
})

//Ahora sobre-escribimos el manejador de express para que no se envie info con datos sobre nuestra app.

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500 ).send({
        error:true,
        message: err.message,
    });
})

module.exports = server;

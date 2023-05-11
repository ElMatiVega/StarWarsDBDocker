1- en controllers add utils y helpers a la carpeta src.
    -utils: van fn con acciones puntuaales, sencilla y que se pueden reutilizar en otros proyectos.
    -helpers: van a ir fn propias de mi proyectos.

2- UTILS 
   |--> index.js que requiere un response.
   |--> creamos "response.js" va a ser la que va a enviar la respuesta.

3- EN controllers en el get"algo" requerimos el reponse y le pasamos el (res, status y data).

4-PENSANDO EN EL MANEJO DE ERRORES.
  -Create"algo"  y hay un error tenemos que saber que en toda aplicacion creada con Express va a tener un manejador de errores facilitado por express, pero maneja errores SINCRONOS.
  Al crear algo va ser de naturaleza SINCRONICA y el manejador y la APP se rompen y aca es donde tenemos que ayudarlo al manejador.

5- en el index de data agregamos una propiedad "create"
6- Trabajamos el controles de create"algo".

7- CREAMOS un TRYCATCH GENERAL.
   - en UTIL creamos catchAsync en el index.js y su respectivo modulo dentro de utils.js y aca es donde se maneja el error asyncronico con el el uso del next. y la requies continua con el error hacia el manejador de error de express.
   ES UNA FUNCION DE ORDEN MAYOR

   De esta manera tenemos un solo .catch en la app y no muchos trycatch.

8- Llamamos esta funcion catchedAsync en el index del contralador.

9-MEJORANDO, MODIFICACION DEL STATUS
 en el modulo de server
 <!-- vamos a ser que devuelva una respuesta ante la falta de respuesta a la peticion
server.use("*",(req,res)=>{
    res.status(404).send("Not found")
})

sobre-escribir el manejador de express para que no se envie info con datos sobre nuestra app.

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500 ).send({
        error:true,
        message: err.message,
    });
}) -->

Al hacer esto evitamos de enviar la traza de error y asi no exponemos como son las rutas de nuestra app.

10- si Hay un error al previo a crear o en la creacion no debemos dejar que el proceso llegue hasta el manejo del error del index del data. Para eso creamos la carpeta MIDDLERWARES dentro de SRC y sus modulos.
Esta va a contener fn para ir validando datos para que cuando llegue la info al index de data ya este en condiciones para no romper la app.

En el index del router requiero este middelwares para que administre este manejo de error antes de llegar al controlador.

11- Para manejar es statusCode en util creamos carpeta errors.
En el index de util requerimos error y en la carpeta de error creamos el index.js que va a ser una clase de Error nueva, que da un msj y un status.
Es por eso que el middelwares arroja un new ClientError


Asi tenemos un manjo de error centralizado.


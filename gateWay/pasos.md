1- npm init -y para crer packageJson

2- npm i express http-proxy-middleware
Con  http-proxy-middelware lo que vamos a poder hacer es redirijir las peticiones.

3- npm i morgan 
"scripts": {
    "start": "node index.js"
  }
  
No instalamos Nodedemons  no se lleva bien con los proxy y redirecciones.

4- creamos el index.js
usamos express, morgan y ponemos el puerto a escuchar.

5- Ahora quiero que las peticiones que llegan a /characters se redirijan esa misma peticion al microservicion que se encarga de los personajes que es el que esta en el puerto 8000
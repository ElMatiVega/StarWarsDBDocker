1- poner a cada servicio en un contenedor Docker.
    - Hay que entender que un servicio va a estar escuchando peticiones en un puerto determinado, pero en donde?? va a escuchar en el contenedor y no en la compu!!!!!!!
    La APP corre en el contenedor.

2- Creamos DOCKERFILE: Aca va a estar la configuracion de Docker de como tiene que armar la imagen que luego se va a levantar como contenedor.

   -FROM node:16: de aca se parte, indicaos que se instale node version 16.

   -WORKDIR  /app:   aca establecemos donde guardamos la aplicacion.

   -COPY package*.json ./: Copiame el archivo package + lo que sea, eso se lo indicamos con el* y guardalo en la carpeta app ./

   -RUN npm install

   -COPY . . (fuente...destino) todo lo que tiene la carpeta en la carpeta app

¡¡PARTE IMPORTANTE PARA NO EXPONER TODOS LOS PURTOS!!!!
   -EXPOSE 8000: dejo a disposicion ese puerto. Depende del puerto del coponente.

   -CMD ["npm", "start"]


3- crear .dockerignore --> node_module
                      \
                       --> npm-debug.log 


4- abrimos terminal para:
    -construir la imagen, usando el comando: 'docker build -t <nombre> .' es muy importante el tema de los nombres y con el '.' le indicamos donde esta el archivo dockerfile a construir. 

5- Hacer correr el contenedor con el sig. comando:
'docker run -p 8000:8000 <nombre>' (mi computadora:contenedor), el numero es recomendable ponerle el mismo que ya tiene configurado el modulo.
Lo hacemos correr y no da en consola algo asi:
<!--
 [HPM] Proxy created: /  -> http://localhost:8001
[HPM] Proxy created: /  -> http://localhost:8002
[HPM] Proxy created: /  -> http://localhost:8003
Gateway on port 8000 -->

Esta corriendo la app dentro del contenedor de docker y no en la cpu.

6- repetir paso 2 y 3 en los otros componentes
Cambia en el paso dos el EXPOSE dependiendo del componente.

7- ejecutar comandos en las distintas terminales.

8- TENEMOS QUE CONECTAR LOS CONTENEDORES, hacer que se comuniquen entre ellos. 
Tenemos que hacer una RED que funcione con docker, para eso abrimos un terminal nueva en la raiz y ejecutamos el siguiente comando: 'docker network create <nombre>'.

- Paso importante, tengo que cambiar en el index de gatewey el terget, de localhost a el nombre que le vamos a dar al contenedor. Esto es para que se identifique los contenedores dentro de la red de trabajo.

-REBUIlDEAR el contenedor, en este caso gateway. para eso:

-detenemos y removemos desde la extencion de docker en visual
-hacemos el paso 4 'docker build -t gateway .'
- paso importante que conectamos con la red:
'docker run --network=starwars --name=gateway -p 8000:8000  gateway'

-ahora con la imagen del contenedor characters creada, ejecuto: 'docker run --network=starwars --name=characters -p 8001:8001  characters'
Y LOS OTROS CONTENEDORES REPITO ESTE PASO.



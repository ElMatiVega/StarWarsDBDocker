1)- Creamos el archivo docker-compose.yml

2)- En la terminal a nivel raiz, en este caso star_wars_api_microsercices ejecutamos el comando "docker-compose build"

3)- En la terminal: "docker-compose up"
4)- hacemos peticion al getway:

http://localhost:8000/characters

Me trae los personajes sin hacer correr los otros microservicios.
Caminito: 
1-Peticion de character llega al gateway.
2-gateway redirecciona la peticion al microservicio de characters
3-characters hace una peticion al microservicio de base de datos
4-microservicio de BD responde y le pasa la info al gateway
5- finalmente gateway responde.
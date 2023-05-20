require("dotenv").config();// Nos va a dar la posibilidad de poder usar el .env dentro del process.env


//de esta forma confi. todas la variables de entorno aca y las vamos a requerir deonde las usemos y así nos vamos a ahorra de llamar muchas veces el process.env en cada modulo
module.exports = {
    MONGO_URI:process.env.MONGO_URI,
}
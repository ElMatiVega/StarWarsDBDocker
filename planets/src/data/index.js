const Planets=require('./planets.json');
const axios = require("axios");
module.exports={
    list: async ()=>{
        const results = await axios.get("http://database:8004/Planet");
        return planets;
    },
    create: async()=>{
        throw Error('Error en la Base de Datos a la hora de crear el planeta')
    }
}
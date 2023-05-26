const characters=require('./characters.json')
const axios=require('axios')
module.exports={
    list: async ()=>{
        const results = await axios.get("http://database:8004/Character");
        return results.data;
    },
    id:async ()=>{
        const results = await axios.get("http://database:8004/Character/:id");
        return results.data;
    },
    create: async()=>{
        throw Error('Error en la Base de Datos a la hora de crear el personaje')
    },
    
}
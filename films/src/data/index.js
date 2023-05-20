const films=require('./films.json')

module.exports={
    list: async ()=>{
        const results = await axios.get("http://database:8004/Film");
        return results.data;
    },
    create: async()=>{
        throw Error('Error en la Base de Datos a la hora de crear el films')
    }
}
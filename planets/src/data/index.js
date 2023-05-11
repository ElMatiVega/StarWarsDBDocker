const Planets=require('./planets.json')

module.exports={
    list: async ()=>{
        return Planets;
    },
    create: async()=>{
        throw Error('Error en la Base de Datos a la hora de crear el planeta')
    }
}
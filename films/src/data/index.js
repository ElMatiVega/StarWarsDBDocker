const films=require('./films.json')

module.exports={
    list: async ()=>{
        return films;
    },
    create: async()=>{
        throw Error('Error en la Base de Datos a la hora de crear el personaje')
    }
}
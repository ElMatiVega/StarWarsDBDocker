const films=require('./planets.json')

module.exports={
    list: async ()=>{
        return films;
    }
}
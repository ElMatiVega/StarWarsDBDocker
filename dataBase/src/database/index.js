const mongoose= require("mongoose");
const {MONGO_URI} = require("../configs/envs");

const conn= mongoose.createConnection(MONGO_URI);//closter creado en mongoose atlas

//  const Character = conn.model("Character", require("./schemas/characterSchema"));

// const Film = conn.model("Film", require("./schemas/filmSchema"));

// const  Planet= conn.model("Planet", require("./schemas/planetSchema"))
// console.log(Character, "clg"); 
// Character.find()
//  .then((res)=> console.log(res[0]));

module.exports={
    Character : conn.model("Character", require("./schemas/characterSchema")),
    Film :conn.model("Film", require("./schemas/filmSchema")),
    Planet: conn.model("Planet", require("./schemas/planetSchema")),
}
const server = require("./src/server");
const {Character, Film, Planet}=require('./src/database');

// Character.list().then((res) =>console.log(res));

// Character.get(1).then((res)=>console.log(res));

// Character.insert({
//   _id:"202",
//   name:"Mati Vega",
//   birth_year:"1982",
//   gender: 1
 
// }).then((res)=>console.log(res))

// Film.list().then((res) =>console.log(res));
// Planet.get(1).then((res)=>console.log(res));

server.listen(8004, () => {
  console.log(`DataBase Server listening on port 8004`);
});

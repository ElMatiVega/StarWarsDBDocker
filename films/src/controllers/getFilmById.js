const Film= require('../data');
const {response} = require('../utils');

module.exports= async(req, res) => {

    const film = await Film.id(id);
  
    response(res, 200, film);
    
};
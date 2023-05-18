const Character= require('../data');
const {response} = require('../utils');
const axios =require('axios')
module.exports= async(req, res) => {

    const characters = await Character.list();
  
    response(res, 200, characters);
    res.status(200).json(characters)
};
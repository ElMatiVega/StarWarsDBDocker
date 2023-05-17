const {Router}=require('express');
// en vez de importar cada schema y hecer el CRUD a cada schema vamos a hacer lo sig:
const store= require('../database')// de database llega un objeto con cada schema
const {validateModel}= require('../middleware')
const router=Router();

router.get('/:model', validateModel, async(req,res)=>{
    const{model}=req.params;
    const response = await store[model].list();
    res.status(200).json(response)
})

router.get('/:model/:id', validateModel, async(req,res)=>{
    const{model, id}=req.params;
    const response = await store[model].get(id);
    res.status(200).json(response)
})

module.exports= router
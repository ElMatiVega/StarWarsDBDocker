const { Schema } = require('mongoose');

const characterSchema = new Schema({
    _id: String ,// Schema.Types.ObjectId es la configu por defecto que le da mongo. Pero nosotros ya le pusimos un string"1"
    name: String ,
    height: String ,
    mass: String ,
    hair_color: String ,
    skin_color: String ,
    eye_color: String ,
    birth_year: String ,
    gender: String ,
    homeworld:{type:String, ref:"Planet"} ,// "1" prestar atencion: hace ref al id del plantea
    films: [{type:String, ref:"Film"}],// ["1", "2", "3", "6"]referencia a peliculas
});

//
//no arrow fn
characterSchema.statics.list= async function(){
 return await this.find()
 .populate('homeworld', ['_id','name'])
 .populate('films',['_id','title'])
}
// characterSchema.statics.get= async function(_id){
//     return await this.findOne({_id})
//                     .populate('homeworld', ['_id','name'])
//                     .populate('films',['_id','title'])

// }
characterSchema.statics.get= async function(id){
    return await this.findById(id)
                    .populate('homeworld', ['_id','name'])
                    .populate('films',['_id','title'])

}

characterSchema.statics.insert= async function(character){
    return await this.create(character)
}

module.exports=characterSchema;
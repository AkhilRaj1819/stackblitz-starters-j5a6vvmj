const mongoose =  require('mongoose')

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    }
}) 

const model = mongoose.model('item',schema);

module.exports=model;
const express = require('express');
const model = require('./schema')
const router = express.Router();

router.post('/menu',async(req,res)=>{
    try {
    const item = req.body;
    if(!item.name || !item.description || !item.price){
        return res.status(400).send({msg:"Enter all fields"});
    } 
    const newItem = new model(item);
    const savedItem = await newItem.save();
    return res.status(200).send({msg:"Created new MenuItem",data:savedItem});
} catch (error) {
    return res.status(500).send({msg:"something went wrong",error});
    }
})

router.put('/menu/id:',async(req,res)=>{
    try {
    const {id} = req.params;
    if(!id){
        return res.status(400).send({msg:"Enter the id"});
    }
    const item = req.body;
    const updated = await model.findByIdAndUpdate(id,item,{new:true});
    if(!updated){
        return res.status(400).send({msg:"Item not found"});
    }

} catch (error) {
    return res.status(500).send({msg:"something went wrong",error});
    }

})

router.delete('/menu/id:',async(req,res)=>{
    try {
        const {id} = req.params;
        const deleted = await model.findByIdAndDelete(id);
        return res.status(200).send({msg:"Deleted successfully"});
    } catch (error) {
        return res.status(500).send({msg:"something went wrong",error});
    }
})

module.exports=router;

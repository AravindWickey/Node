const mongo = require('../shared/connect');
const {ObjectId} = require("bson")


module.exports.getEmployee = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("employee").find().toArray();
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
module.exports.getEmployee_one = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("employee").findOne({_id: ObjectId(req.params.id)})
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }    
}
module.exports.createEmployee = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("employee").insertOne(req.body);
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }    
}
module.exports.updateEmployee = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("employee").updateOne({_id: ObjectId(req.params.id)}, {$set:{name:req.body.name, Age:req.body.Age}})
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }    
}
module.exports.deleteEmployee = async(req,res,next)=>{
    try{
        var data = await mongo.db.collection("employee").remove({_id: ObjectId(req.params.id)});
        res.send(data);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }  
  
}
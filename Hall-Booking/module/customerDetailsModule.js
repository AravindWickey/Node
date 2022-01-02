const mongo = require("../shared/connect");
const { ObjectId } = require("bson");

module.exports.getcustomerDetails = async (req, res, next) => {
  try {
    let data = await mongo.db.collection("customerDetails").find().toArray();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports.createCustomer = async (req, res, next) => {
  try {
    var data = await mongo.db.collection("customerDetails").findOne({"room_no":req.body.room_no});
    if(data){
      res.send("room already booked")
    }else{ 
    await mongo.db.collection("customerDetails").insertOne({
        name: req.body.name,
        Date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        room_no: req.body.room_no,
      });  

    await mongo.db.collection("roomDetails").updateOne(
        { room_no: req.body.room_no },
        { $set: { room_status: "Booked" } }
      );
    res.send("Updated Sucessfully");}
  } 
  
  catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

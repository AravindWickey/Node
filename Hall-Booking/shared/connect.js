const {MongoClient} = require("mongodb");


module.exports =  {
db:{},
async connect(){
try{
    const client = await MongoClient.connect("mongodb://localhost:27017"); 
    this.db = client.db("SampleIntegra");
}catch(err){
    console.log(err)
}
}
}
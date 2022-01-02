const path = require('path');
const os = require("os");
const fs = require("fs");
const http = require("http")

const datas2 = require('./module')
const express = require('express');
const app = express();

app.use(express.json())


app.use((req,res, next)=>{
    console.log("it's from middleware");
    next()  
})

// function hello(){
//     console.log("hello");
// }

// const setTimeOut = global.setTimeout(hello, 3000)

//console.log(__filename)
//console.log(__dirname)
//console.log(path.parse(__filename))

//console.log(os.userInfo())
//console.log(os.freemem())
//console.log(os.type())

// const fdata = fs.readFileSync(__filename);
// console.log(fdata)

//console.log(datas2)

// var server = http.createServer((req,res)=>{
//     if(req.url ==='/user'){
//        res.write( JSON.stringify({
//             Name:'Aravind',
//             Age:'23'
//         }))
//     }
//     else{
//         res.write("{}")
//     }
//     res.end();
// });
// server.listen(3000);

//dev dependencies ex: nodemon
//production dependencies ex: express

app.get("/",(req,res)=>{
    res.send(({
        Name : "Welcome",
    }))
})

app.get("/user/:id",(req,res)=>{
    console.log(req.params.id)
    res.send(({
        Name : "Wrong",
        Age :"101"
    }))
})

app.post("/user",(req,res)=>{
   console.log(req.body) ;
   console.log(req.query)
   res.send("helo")
})


app.listen(3000);







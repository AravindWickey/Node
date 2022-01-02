const fs = require('fs');
const express = require('express');
const app = express();
const path = './Particular Folder'

const currentDate = new Date().toString();

//fs.writeFile will create date-time.txt file and write time stamp in the date-time.txt file.
fs.writeFile('./Particular Folder'/{currentDate}.txt,currentDate, (err) => {
  if (err)
    console.log(err);

//fs.readFileSync will read that file and store that content in ReadFile, we can print it.    
const ReadFile = fs.readFileSync('./Particular Folder/date-time.txt','utf8')
app.get("/",(req,res)=>{
  res.send(JSON.stringify({
      Current_Time_Stamp:ReadFile
  }))
})
});

app.listen(3000);

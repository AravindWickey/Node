
const express = require("express");
const app = express();
const mongo = require('./shared/connect')
const employeeRouter = require('./routes/employee')
app.use(express.json());
mongo.connect();

app.use('/employee', employeeRouter )



app.listen(3000);
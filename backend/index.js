const express = require('express');

// console.log(express);
const myapp = express();
const cors = require('cors');
require('dotenv').config();
const myrouting = require("./routing/approuting");
const dataurl = require('./database/mydb');

const port = process.env.PORT ||7700

myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouting);




myapp.listen(5500,()=>{
    console.log(`welcome to exprss at port: ${port} `)
});
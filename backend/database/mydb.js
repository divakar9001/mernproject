const mongodb = require('mongoose');
require('dotenv').config();
const database = process.env.DAATABASE
// const usedata = mongodb.connect("mongodb+srv://divakarDB:mishra1234%40%40@cluster0.awmjgf5.mongodb.net/atlasdata").then(()=>{
//     console.log("database connect");
// }).catch()

const usedata = mongodb.connect(database).then(()=>{
    console.log("database connect");
}).catch()






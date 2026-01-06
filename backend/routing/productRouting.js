const express = require('express');
// console.log(express);
const prodrouting = express.Router();
const schema1 = require('../schema/prdocutschema');

prodrouting.get('/product',(req,res)=>{
    res.send("user find all data")
});

prodrouting.get('/alldata',async(req,res)=>{
    const recivedata = await schema1.find();
    res.send({status:201,msg:'all data',data:recivedata})
})


module.exports = prodrouting;
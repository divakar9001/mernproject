const express = require('express');
// console.log(express);
const prodrouting = express.Router();
const schema1 = require('../schema/prdocutschema');

prodrouting.get('/',(req,res)=>{
    res.send("user find all data")
});

prodrouting.get('/alldata',async(req,res)=>{
    const recivedata = await schema1.find();
    res.send({status:201,msg:'all data',data:recivedata})
});

prodrouting.get('/singleproduct/:id',async(req,res)=>{
    const id = req.params.id;
    console.log(id);
    const singledata1 = await schema1.findOne({_id:id});
    res.send({msg:'one product',status:211,data:singledata1})
})


module.exports = prodrouting;
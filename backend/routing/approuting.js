const express = require('express');
const myapp = express.Router();
const myschema = require("../schema/appschema");


myapp.get("/",(req,res)=>{
    res.send("welcome to express")
})

myapp.get("/about",(req,res)=>{
    res.send("this is about page")
})

myapp.get("/contact",(req,res)=>{
    res.send("this is contact page")
})

myapp.get("/myusers",async(req,res)=>{
    const users = await myschema.find();
    res.send({msg:'userlist',data:users,status:205});
})


myapp.post("/registerusers", async (req, res) => {
 
    const { name, email, passward,phone, age } = req.body;
    console.log("fullname is ",name);
    const data = await new myschema({  name, email, passward,phone, age }).save();
     
    res.status(201).send({ msg: "User registered", data });
  
});



module.exports = myapp;
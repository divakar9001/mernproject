const express = require('express');
const myapp = express.Router();
const myschema = require("../schema/appschema");


myapp.get("/", (req, res) => {
    res.send("welcome to express")
})

myapp.get("/about", (req, res) => {
    res.send("this is about page")
})

myapp.get("/contact", (req, res) => {
    res.send("this is contact page")
})

myapp.get("/myusers", async (req, res) => {
    const users = await myschema.find();
    res.send({ msg: 'userlist', data: users, status: 205 });
})


myapp.post("/registerusers", async (req, res) => {

    const { name, email, passward, phone, age } = req.body;

    if (email === "" || passward === "") {
        res.send({ msg: "email and passward are required", status: 321 })
    }
    else {
        console.log("fullname is ", name);
        const data = new myschema({ name, email, passward, phone, age })
        await data.save();
        res.send({ msg: "User registered", mydata:data,status:221 });
    }


});

myapp.get("/singledata/:id",async(req,res)=>{
    const id = req.params.id;
    const data = await myschema.find({_id:id});
    console.log(data);
    res.send({msg:"users data",status:205,singeldata:data})
})

myapp.delete("/deleteuser/:id",async(req,res)=>{
    const id = req.params.id;
    const delsuer = await myschema.findByIdAndDelete({_id:id});
     res.send({msg:"delete user successfully",status:208,data:delsuer});
})

myapp.post("/login",async(req,res)=>{
    const {email,passward} = req.body;
    if(email == ''|| passward == ''){
        res.send({msg:"email and passward must have",status:413});
    }
    else{

        const loginusers = await myschema.findOne({email:email});
        if(!loginusers){
            res.send({msg:'data are not found',status:413,data:loginusers})
        }
        else{
            if(loginusers.passward == passward ){
                res.send({ msg: "data found successfully",status:201});
            }

            else{
                res.send({ msg: "password is not match",status:420});
            }
        }
    }
})



module.exports = myapp;
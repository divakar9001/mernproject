const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyuser = require('../middleware/authnticate');
const myapp = express.Router();
const myschema = require("../schema/appschema");
const mykey = "qqwewerweuyyszewdwdws";

myapp.get("/", (req, res) => {
    res.send("welcome to express")
})

myapp.get("/about", (req, res) => {
    res.send("this is about page")
})

myapp.get("/contact", (req, res) => {
    res.send("this is contact page")
})




myapp.post("/registerusers", async (req, res) => {

    const { name, email, passward, phone, age } = req.body;

    if (email === "" || passward === "") {
        res.send({ msg: "email and passward are required", status: 321 })
    }
    else {
        const hashPass = await bcrypt.hash(passward, 10)
        console.log("fullname is ", name);
        const data = new myschema({ name, email, passward: hashPass, phone, age })
        await data.save();
        res.send({ msg: "User registered", mydata: data, status: 221 });
    }
});




myapp.get("/singledata/:id", verifyuser, async (req, res) => {
    const id = req.params.id;
    const data = await myschema.find({ _id: id });
    console.log(data);
    res.send({ msg: "users data", status: 205, singeldata: data })
})

myapp.delete("/deleteuser/:id", async (req, res) => {
    const id = req.params.id;
    const delsuer = await myschema.findByIdAndDelete({ _id: id });
    res.send({ msg: "delete user successfully", status: 208, data: delsuer });
})

myapp.post("/login", async (req, res) => {
    const { email, passward } = req.body;
    if (email == '' || passward == '') {
        res.send({ msg: "email and passward must have", status: 413 });
    }
    else {

        const loginusers = await myschema.findOne({ email: email });

        if (!loginusers) {
            res.send({ msg: 'data are not found', status: 405, data: loginusers })
        }


        const matchPass = await bcrypt.compare(passward, loginusers.passward);


       
        if (!matchPass) {
            return res.send({ msg: "password is not match", status: 420 });
        }

        const usertoken = jwt.sign({ email: loginusers.email }, mykey, { expiresIn: '1m' });
         res.set("authorization", `Bearer ${usertoken}`);
        res.send({ msg: "data found successfully", status: 201, token: usertoken, data: loginusers });
    }
});

// myapp.post("/login", async (req, res) => {
//     const { email, passward } = req.body;

//     if (email === '' || passward === '') {
//         return res.send({ msg: "email and passward must have", status: 413 });
//     }

//     const loginusers = await myschema.findOne({ email });

//     // CHECK IF USER EXISTS
//     if (!loginusers) {
//         return res.send({ msg: 'data not found', status: 413 });
//     }

//     // COMPARE PASSWORD (correct order)
//     const matchPass = await bcrypt.compare(passward, loginusers.passward);

//     if (!matchPass) {
//         return res.send({ msg: "password is not match", status: 420 });
//     }

//     // SUCCESS
//     res.send({ msg: "data found successfully", status: 201 });
// });



myapp.patch('/update/:id', verifyuser, async (req, res) => {
    const id = req.params.id;
    const mydata = { name, email, passward, phone, age } = req.body;
    const updateuser = await myschema.findByIdAndUpdate(id, mydata, { new: true });
    res.send({ msg: "user update successfully", status: 251, data: updateuser });

})

myapp.get("/myusers", verifyuser, async (req, res) => {
    const users = await myschema.find();
    res.send({ msg: 'userlist', data: users, status: 205 });
});

module.exports = myapp;
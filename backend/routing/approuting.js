const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const verifyuser = require('../middleware/authnticate');
const myapp = express.Router();
const myschema = require("../schema/appschema");
const mykey = "qqwewerweuyyszewdwdws";

myapp.get("/", (req, res) => {
    res.send("welcome to express")
})



myapp.post("/registerusers", async (req, res) => {
    try {
        const { name, email, passward, phone, age } = req.body;

        if (!email || !passward) {
            return res.send({
                msg: "email and password are required",
                status: 321
            });

        }

        const isRegister = await myschema.findOne({ email });

        if (isRegister) {
            return res.send({ msg: "Already Register", status: 322 });
        }

        const hashPass = await bcrypt.hash(passward, 10);

        // const data =  myschema({
        //     name,
        //     email,
        //     passward: hashPass,
        //     phone,
        //     age
        // });

        // await data.save();
        await myschema({ name, email, passward: hashPass, phone, age }).save();
        return res.send({ msg: "User registered successfully", status: 221 });
    }
    catch (error) {
        console.error(error);
        return res.status(500).send({
            msg: "Server error",
            status: 500
        });
    }
})

myapp.get("/singledata/:id", verifyuser, async (req, res) => {

    const id = req.params.id;
    const data = await myschema.findOne({ _id: id });

    if (!data) {
        console.log("not")
        return res.send({ msg: 'user not found', status: 402 })
    }
    // console.log(data);
    else {
        res.send({ msg: "users data", status: 205, singeldata: data });
        console.log("yesyes")
    }

});

// myapp.get("/singledata/:id", verifyuser, async (req, res) => {
//   try {
//     const { id } = req.params;

//     

//     const data = await myschema.findById(id); // ✅ IMPORTANT

//     if (!data) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     res.status(200).json({
//       msg: "User data",
//       singledata: data
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: "Server error" });
//   }
// });

myapp.delete("/deleteuser/:id", async (req, res) => {
    const id = req.params.id;
    const delsuer = await myschema.findByIdAndDelete({ _id: id });
    res.send({ msg: "delete user successfully", status: 208, data: delsuer });
})

myapp.post("/login", async (req, res) => {
    const { email, passward } = req.body;
    if (email == '' || passward == '') {
        return res.send({ msg: "email and passward must have", status: 413 });
    }
    else {

        const loginusers = await myschema.findOne({ email: email });

        if (!loginusers) {
            return res.send({ msg: 'data are not found', status: 405, data: loginusers })
        }


        const matchPass = await bcrypt.compare(passward, loginusers.passward);
         if (!matchPass) {

            return res.send({ msg: "password is not match", status: 420 });
        }
        if (email === 'divakarbug01@gmail.com' && matchPass) {
            const usertoken = jwt.sign({ email: loginusers.email }, mykey, { expiresIn: '1m' });
            res.set("authorization", `Bearer ${usertoken}`);
            return res.send({ msg: "admin", status: 220, token: usertoken });

        }
        res.send({ status: 201, msg: 'only users'});

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



// myapp.patch('/update/:id', verifyuser, async (req, res) => {
//     const id = req.params.id;
//     const mydata = { name, email, passward, phone, age } = req.body;
//     const updateuser = await myschema.findByIdAndUpdate(id, mydata, { new: true });
//     res.send({ msg: "user update successfully", status: 251, data: updateuser });

// })

myapp.patch('/update/:id', verifyuser, async (req, res) => {
    const id = req.params.id;

    const { name, email, passward, phone, age } = req.body;

    const updateuser = await myschema.findByIdAndUpdate(
        id,
        { name, email, passward, phone, age },
        { new: true }
    );

    res.send({
        msg: "user update successfully",
        status: 251,
        data: updateuser
    });
});


myapp.get("/myusers", verifyuser, async (req, res) => {
    const users = await myschema.find();
    res.send({ msg: 'userlist', data: users, status: 205 });
});

module.exports = myapp;
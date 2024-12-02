const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')
const UserModel = require('../models/Users');
const fun = require('../functions');
const userRoutes = express.Router();
let myToken;

/*{
    "username": "test1",
    "email": "test1@domain.com",
    "password": "test1"
}*/
//create new account
userRoutes.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    // validate user input
    if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyBodyMsg("user"));
    }
    try {
        // check if user already exist
        const oldUser = await UserModel.findOne({username});
        if (oldUser) {
            return res.status(400).send({
                status: false,
                message: "User already exist. Please Login"
            });
        }
        // emcrpyt password
        encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel()
        newUser.username = username;
        newUser.email = email;
        newUser.password = encryptedPassword;
        newUser.created_at = new Date()
        
        newUser._id = new mongoose.Types.ObjectId();

        newUser.save();
        res.status(201).send({
            status: true,
            message: "Registered successfully!"
        });
    } catch (e) {
        if (!(username && email && password)){
            return res.status(400).send({
                status: false,
                message: "All fields are required"
            });
        }
        res.status(500).send({
            status: false,
            message: "This email is already registered."
        });
    }
})

/*{
    "username": "comp3123",
    "password": "comp3123isthebest"
}*/
//account login
userRoutes.post('/login', async (req, res) => { 
    // validate user input
    if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyBodyMsg("user"));
    }
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (!user) {
            res.status(500).send(fun.invalidImputMsg("email"));
        } else {
            if (await bcrypt.compare(password, user.password)) {
                // Create token with the username in the payload and expires after 2hrs
                const jwtKey = "super_key_for_secrecy";
                const myToken = await jwt.sign(
                    { email },
                    jwtKey,
                    { expiresIn: "3h" }
                );
                res.status(200).send({
                    message: "Login successful.",
                    jwt_token: `${myToken}`
                });
            } else {
                res.status(500).send(fun.invalidImputMsg("password"));
            }
        } 
    } catch (e) {
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})

userRoutes.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({
            status: false,
            message: e.message
        });
    }
})

userRoutes.put('/changepassword', async (req, res) => {
    if (fun.isEmpty(req.body)) {
        return res.status(400).send(fun.emptyBodyMsg("user"));
    }

    try {
        const {username, email, password} = req.body;

        const user = await UserModel.findOne({email});
        if (!user) {
            console.log("str-1")
            res.status(500).send(fun.invalidImputMsg("email"));
            console.log("str-2")
        } else {
            console.log("str-3")
            pswd = "";
            await bcrypt.hash(password, 10)
            .then((data) => data)
            .then(data => {pswd = data});//.then(result => {result.data})
            console.log("str-3a")
            console.log(pswd)
            console.log(password)
            console.log(user.password)
            if (pswd == user.password) {
                console.log("str-3a")
                res.status(500).send({
                    message: "new password must be different from previous one"
                })
            }else{
                console.log("str-3b")

                user.password = pswd
                user.save();
                res.status(200).send({
                    "message": "Password chnage successrul"
                })

            }
        }
    } catch( e) {
        res.status(500).send({
            status: false,
            message: e.message
        });

    }

})


module.exports = userRoutes;
import signupModel from "./model"
const crypto = require('crypto');
// import { jwt } from "jsonwebtoken";
var jwt = require('jsonwebtoken');

const jwtKey='rahul'

export const signupData = async (req, res, next) => {
    console.log("/signup Hitted...")
    const signupUser = new signupModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedSignupUser = await signupUser.save()
        
        jwt.sign({savedSignupUser}, jwtKey, {expiresIn: "2h"}, (err, token)=>{
            res.send({savedSignupUser, token: token})
        })
        
        // res.status(200).send(savedSignupUser)
    }
    catch (e) {
        res.status(500).send({ "Error ": e })
    }
}

export const loginData = async (req, res, next) => {
    console.log("/login Hitted...")

    const HASH_SALT = "RAHUL"
    let hash = crypto
        .createHmac("sha512", HASH_SALT)
        .update(req.body.password)
        .digest("hex");

    const loginUser = await signupModel.findOne({ email: req.body.email })
    if (loginUser) {
        const passwordCheck = hash === loginUser.password
        if (passwordCheck) {
            jwt.sign({loginUser}, jwtKey, {expiresIn: "2h"}, (err, token)=>{
                res.send({loginUser, token: token})
            })
            // res.send(loginUser)
        }
        else {
            res.status(400).json({ error: "password doesn't match" });
        }
    }
    else {
        res.status(400).json({ error: "User doesn't exist" });
    }
}

export const signupAllData = async (req, res, next) => {
    console.log("/signupall Hitted...");
    try {
        const _id = req.params.id
        console.log(_id);
        const signupallUser = await signupModel.findById(_id);
        
        // var obj = new Object();
        // obj._id = signupallUser._id
        // obj.name = signupallUser.name
        // obj.email = signupallUser.email
        // obj.password = signupallUser.password

        // var jsonString = JSON.stringify(obj);

        res.status(200).send(signupallUser)
    }
    catch(e){
        res.status(500).send(e);
    }
}


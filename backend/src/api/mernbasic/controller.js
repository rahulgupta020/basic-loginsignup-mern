import signupModel from "./model"
const crypto = require('crypto');

export const signupData = async (req, res, next) => {
    console.log("/signup Hitted...")
    const signupUser = new signupModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const savedSignupUser = await signupUser.save()
        res.status(200).send(savedSignupUser)
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
        if (loginUser){
            const passwordCheck = hash === loginUser.password
            if(passwordCheck){
                res.send(loginUser)
            }
            else{
                res.status(400).json({ error: "password doesn't match" });
            }
        }
        else{
            res.status(400).json({ error: "User doesn't exist" });
        }
}
import { Router } from "express";
import { schema } from "./model";
import { signupData, loginData, signupAllData } from "./controller";
const { name, email, password } = schema.tree;
import { middleware as body } from "bodymen";

var jwt = require('jsonwebtoken');

const jwtKey='rahul'

const router = new Router()

function verifyToken(req, res, next){
    let token = req.headers['authorization'];
    if(token){
        token = token.split(' ')[1];
        console.log(token)
        jwt.verify(token, jwtKey, (err, valid) => {
            if(err){
                res.send({result:"Please Provide Valid Token!!!"})
            }
            else{
                console.log("Middleware Called!!!")
                next();
            }
        })
    }
    else{
        res.send({result:"Please add token with headers!!!"})
    }

}

router.get("/", (req, res)=>{
    res.send("Home Page")
})

router.post("/signup",
    body({ name, email, password }),
    signupData
)

router.post("/login",
    body({email, password}),
    loginData
)

router.get("/signupall/:id", verifyToken,
    signupAllData
)


export default router
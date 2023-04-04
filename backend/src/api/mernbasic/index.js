import { Router } from "express";
import { schema } from "./model";
import { signupData, loginData, signupAllData } from "./controller";
const { name, email, password } = schema.tree;
import { middleware as body } from "bodymen";

const router = new Router()

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

router.get("/signupall/:id",
    signupAllData
)


export default router
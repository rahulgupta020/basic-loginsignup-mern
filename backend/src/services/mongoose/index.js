import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/mernbasic", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(()=>{
    console.log("MongoDB Connection Successfully...");
}).catch((e)=>{
    console.log("MongoDB Connection Failed...");
})
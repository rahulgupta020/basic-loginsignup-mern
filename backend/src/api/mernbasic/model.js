import mongoose, { Schema } from "mongoose";

const signupSchema = new Schema(
    {
        name: { type: String, maxlength: 322, required: true },
        email: { type: String, maxlength: 322, required: true, match: /^\S+@\S+\.\S+$|^$/, lowercase: true, trim:true, unique:true },
        password: { type: String, maxlength: 322, required: true }
    }
)

const signupModel = mongoose.model('signup_collection', signupSchema)

export const schema = signupModel.schema
export default signupModel
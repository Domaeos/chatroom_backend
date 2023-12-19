import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema  = new Schema({
    username: String,
    email: String,
    password: String,
    role: Number
})

const User = model('User', UserSchema)
export default User;
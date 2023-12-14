import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema  = new Schema({
    username: String,
    email: String,
    password: String,
    // roles: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Role"
    //     }
    // ]
})

const User = model('User', UserSchema)
export default User;
import mongoose from "mongoose"
import { type } from "node:os"

const UserScema = new mongoose.Schema({
    username : {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique: true

    }, 
    password : {
        type: String,
        required: true, 
    }
})


const userModel = mongoose.model("users", UserScema);

export default userModel;
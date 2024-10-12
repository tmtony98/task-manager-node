const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
})

//to connect with atlas give same name as in atlas
const users = mongoose.model("users",userSchema)

module.exports = users
 
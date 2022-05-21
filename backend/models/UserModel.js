const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:'https://img.icons8.com/material-rounded/344/user.png'
    }

},{
    timestamps:true
})

const User = mongoose.model('User',userSchema)
module.exports = User
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const generateToken = require('../config/generateToken')

const User = require('../models/UserModel')

const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password, pic} = req.body
    console.log(name,email,password)
    
    //check if all required fields were provided
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please enter all the fields")
    }
    //check if user already exist
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)

    const user = await User.create({
        name,
        email,
        password:hashedPassword,
        pic
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user.id)
        })
    }else{
        res.status(400)
        throw new Error('failed to create the user')
    }

})

const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    console.log(email,password)
    //check if user exist
    const user = await User.findOne({email})

    const matchedPassword = await bcrypt.compare(password,user.password)

    if(user && matchedPassword){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id),
        })
    }else{
        res.status(401)
        throw new Error('user does not exist or invalid credentials')
    }
})

const getUsers = asyncHandler(async(req,res)=>{
    const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
})

module.exports = {registerUser,authUser,getUsers}
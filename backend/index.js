const express = require('express')
const chats = require('./data/chat')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
dotenv.config()


connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/user',userRoutes)

//handling routes that don't exist

app.use(notFound)
app.use(errorHandler)


app.get('/',(req,res)=>{
    res.send('API is Running')
})

app.get('/api/chat',(req,res)=>{
    res.send({chats})
})

app.get('/api/chat/:id',(req,res)=>{
    const singleChat = chats.find((c)=>c._id === req.params.id)
    res.send(singleChat)
})
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server started on port: ${PORT}`))
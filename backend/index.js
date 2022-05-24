const express = require('express')
const chats = require('./data/chat')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')


//connection
const app = express()
dotenv.config()
connectDB()


//middleware
app.use(cors())
app.use(express.json())
//handling routes that don't exist
// app.use(notFound)
// app.use(errorHandler)

//routes
app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)
app.get('/',(req,res)=>{
    res.send('API is Running')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server started on port: ${PORT}`))
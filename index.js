require('dotenv').config()
const express=require('express')
const cors=require('cors')
const server=express()

require('./config/db')

server.use(cors())
server.use(express.json())
const PORT=3000||process.env.PORT

server.get('/',(req,res)=>{
    res.send("welcome to server")
})

server.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
    
})
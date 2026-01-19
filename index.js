const express=require('express')

const server=express()

const PORT=3000||process.env.PORT

server.get('/',(req,res)=>{
    res.send("welcome to server")
})

server.listen(PORT,()=>{
    console.log(`Server started at port${PORT}`);
    
})
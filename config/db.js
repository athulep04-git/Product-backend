const mongoose=require('mongoose')
mongoose.connect(process.env.ConnectionString).then(()=>{
    console.log("mongodb connected");   
}).catch(err=>{
    console.log("mongodb error"+err);
    
})
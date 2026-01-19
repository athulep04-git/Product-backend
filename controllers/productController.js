const product=require('../models/productModel')

exports.addproduct=async(req,res)=>{
    const {name,price,category,description}=req.body
    try{
        const newproduct=new product({name,price,category,description})
        await newproduct.save()
        res.status(200).json({message:"add product success",newproduct})
    }
    catch(err){
        res.status(400).json("error"+err)
    }
}
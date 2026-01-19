const product=require('../models/productModel')

//add products
exports.addproduct=async(req,res)=>{
    const {name,price,category,description}=req.body
    try{
        const newproduct=new product({name,price,category,description})
        await newproduct.save()
        res.status(200).json({message:"add product success",newproduct})
    }
    catch(err){
        res.status(500).json("error"+err)
    }
}

//get all products

exports.getproduct=async(req,res)=>{
    try{
        const allproducts=await product.find()
        res.status(200).json({message:"product found",allproducts})
    }
    catch(err){
        res.status(500).json("error"+err)
    }
}

//get a product
exports.getoneproduct=async(req,res)=>{
    const {id}=req.params
    try{
        const oneproduct=await product.findById(id)
        if(oneproduct){
            res.status(200).json({message:"product found",oneproduct})
        }
        else{
            res.status(404).json({message:"product not found"})
        }
    }
    catch(err){
        res.status(500).json("error"+err)     
    }
}

//update a product
exports.updateproduct=async(req,res)=>{
    const {id}=req.params
    const {name,price,category,description}=req.body
    try{
        const updateProduct=await product.findByIdAndUpdate(
            id,
            {name,price,category,description},
            {new:true}
        )
        res.status(200).json({message:"product updated",updateProduct})
    }
    catch(err){
        res.status(500).json("error"+err)
    }
}

//delete product

exports.deleteProduct=async(req,res)=>{
    const {id}=req.params
    try{
        await product.findByIdAndDelete(id)
        res.status(200).json({message:"product deleted"})

    }
    catch(err)
    {
        res.status(500).json("error"+err)
    }
}
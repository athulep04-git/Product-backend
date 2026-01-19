const express=require('express')
const productController=require('../controllers/productController')
const route=express.Router()

route.post('/api/addproduct',productController.addproduct)
route.get('/api/getproduct',productController.getproduct)
route.get('/api/getoneproduct/:id',productController.getoneproduct)



module.exports=route
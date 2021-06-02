const express=require('express')
const route=express.Router()
const user=require('../config/models/User')

route.get('/', (req,res)=>{
    user.find()
    .then(person=>res.json({message:'data parsed',person}))
    .catch(err=>console.log(err))
})

route.post('/new',(req,res)=>{
    const newuser = new user(req.body)
    newuser.save()
    .then(person=>res.json({message:'data added',person}))
    .catch(err=>console.log(err))
})

route.put('/:id',(req,res)=>{
    user.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
    .then(person=>res.json({message:'data update',person}))
    .catch(err=>console.log(err))
})

route.delete('/:id',(req,res)=>{
    user.findOneAndDelete({_id:req.params.id})
    .then(person=>res.json({message:'data deleted',person}))
    .catch(err=>console.log(err))
})

module.exports=route
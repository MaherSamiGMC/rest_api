const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema= new Schema({
    name:String,
    adress:String,
    phoneNumber:Number   
})

module.exports=mongoose.model('user',userSchema)
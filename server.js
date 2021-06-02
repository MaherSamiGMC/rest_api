const express=require('express')
const { Server } = require('mongodb')
const app=express()
require('dotenv').config()
const mongoose=require('mongoose')

app.use(express.json())

app.use('/api/v1/',require('./routes/user'))

mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log('db connected'))
.catch(err=>console.log(err))

app.listen(process.env.PORT,()=>{
    console.log('server listening on port '+ process.env.PORT+' ...')
})



const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database.js')

app.set('view engine','ejs')
app.use(express.static('public'))
require('dotenv').config({path:'./config/.env'})
connectDB()
app.get('/',(req, res)=>{
    res.sendFile(index.html)
})
app.listen(process.env.PORT,()=>{
    console.log(`Express Server Now Listening on port ${process.env.PORT}`);
})
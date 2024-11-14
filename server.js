const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
const mongoose = require('mongoose')
const connectDB = require('./config/database.js')
const mainRoutes = require('./routes/main.js')

app.set('view engine','ejs')
app.use(express.static('public'))
require('dotenv').config({path:'./.env'})
connectDB()

app.use('/', mainRoutes)
app.use('/create', mainRoutes)
app.use('/create2', mainRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Express Server Now Listening on port ${process.env.PORT}`);
})
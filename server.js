const express = require('express')
const app = express()
const PORT = process.env.PORT || 8101

app.use(express.static('public'))
require('dotenv').config({path:'./config/.env'})

app.get('/',(req, res)=>{
    res.sendFile(index.html)
})
app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})
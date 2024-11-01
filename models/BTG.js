const mongoose = require('mongoose')

const BTGSchema = new mongoose.Schema({
    section:{type:String},
    sequence:{type:Number},
    bin:{type:Number},
    description:{type:String},
    vintage:{type:String},
    price:{type:Number},
})

module.exports = mongoose.model('BTG', BTGSchema)
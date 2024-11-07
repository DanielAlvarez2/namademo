const mongoose = require('mongoose')

const WineSchema = new mongoose.Schema({
    type:{type:String},
    section:{type:String},
    category:{type:String},
    region:{type:String},
    subRegion:{type:String},
    sequence:{type:Number},
    bin:{type:Number},
    description:{type:String},
    vintageSize:{type:Number},
    price:{type:Number},
    cost:{type:Number},
    quantity:{type:Number},
    status:{type:String},
    totalInventory:{type:Number}
})

module.exports = mongoose.model('Wine', WineSchema)
const mongoose = require('mongoose')

const SpiritSchema = new mongoose.Schema({
    category:{type:String},
    region:{type:String},
    sequence:{type:Number},
    name:{type:String},
    cost:{type:Number},
    price_halfOZ:{type:Number},
    price_1oz:{type:Number},
    price_2oz:{type:Number},
    quantity:{type:Number},
    totalInventory:{type:Number}
})

module.exports = mongoose.model('Spirit', SpiritSchema)
const Wine = require('../models/Wine.js')

module.exports = {
    createWine: async(req,res)=>{
        console.log(req.body)
        try{
            await Wine.create({
                type: req.body.type,
                section: req.body.section,
                category: req.body.category,
                region: req.body.region,
                subregion: req.body.subregion,
                sequence: 1,
                bin: req.body.bin,
                description: req.body.description,
                vintageSize: req.body.vintage_size,
                price: req.body.price,
                cost: req.body.cost,
                quantity: req.body.quantity,
                status: req.body.status
            })
        }catch(err){
            console.log(err)
        }
        res.redirect('/')
    }
}

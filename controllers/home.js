const wines = require('../models/Wine.js')

module.exports={
    getIndex:async(req,res)=>{
        const btg = await wines.find({
            type:'BY THE GLASS'
        }).sort({sequence:'asc'})
        const halfBottles = await wines.find({
            type:'HALF BOTTLES'
        }).sort({sequence:'asc'})
        const largeFormats = await wines.find({
            type:'LARGE FORMATS'
        }).sort({sequence:'asc'})
        const sake = await wines.find({
            type:'SAKE'
        }).sort({sequence:'asc'})
        res.render('index.ejs',{btg:btg,
                                halfBottles:halfBottles,
                                largeFormats:largeFormats,
                                sake:sake})
    },

    getCreate:(req,res)=>res.render('create.ejs'),
    getCreate2:(req,res)=>res.render('create2.ejs'),

    postCreate:async(req,res)=>{
        console.log("req.body: ", req.body)

        try{
            await BTG.create({  section: req.body.section,
                                bin: req.body.bin,
                                description: req.body.description,
                                vintage: req.body.vintage,
                                price: req.body.price,
                                sequence: req.body.sequence    
            })        
        }catch(err){
            console.log(err)
        }
        res.redirect('/')
    }
}
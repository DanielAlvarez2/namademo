const BTG = require('../models/BTG.js')

module.exports={
    getIndex:async(req,res)=>{
        const btg_sake = await BTG.find({
            section:'sake'
        }).sort({sequence:'asc'})
        res.render('index.ejs',{btg_sake:btg_sake})
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
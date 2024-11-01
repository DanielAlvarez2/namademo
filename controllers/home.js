const BTG = require('../models/BTG.js')

module.exports={
    getIndex:(req,res)=>res.render('index.ejs'),

    getCreate:(req,res)=>res.render('create.ejs'),

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
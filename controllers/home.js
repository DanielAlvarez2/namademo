module.exports={
    getIndex:(req,res)=>res.render('index.ejs'),

    getCreate:(req,res)=>res.render('create.ejs'),

    postCreate:(req,res)=>{
        console.log("req.body: ", req.body)
        res.redirect('/')
    }
}
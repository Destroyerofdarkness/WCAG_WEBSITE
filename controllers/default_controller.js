const {findCatDetails, randomCat}= require("../handlers/fetchCatData")

const homepage_render = (req,res)=>{
    try{
        res.render("index.ejs", {title: "Homepage"})
    }catch(err){
        console.log("Error on homepage_render:",err)
        res.status(500).send({err})
    }
}

const home_redirect = (req,res)=>{
    try{
        res.redirect("/home")
    }catch(err){
        console.log("Error on home_redirect:",err)
    }
}

const render_catPage = async(req,res, next)=>{
  const cat = req.params.name  
    try{
        const catInfo = await findCatDetails(cat)
        res.render("catPage", {title: catInfo.name, cat: catInfo})
    }catch(err){
        console.log(err)
        res.status(500).send(err)
        next()
    }
}

const random_cat = async(req,res)=>{
    try{
        const cat = await randomCat()
        console.log(cat)
        res.redirect(`/cat/${cat.name}`)
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = {
    homepage_render,
    home_redirect,
    render_catPage,
    random_cat
}
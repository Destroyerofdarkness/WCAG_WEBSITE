
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


module.exports = {
    homepage_render,
    home_redirect
}
const express = require("express");

const app = express();

const default_router = require("./routes/default_routes")

require("dotenv").config();

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.use(default_router)

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port 3000 and host:", require("os").hostname())
})
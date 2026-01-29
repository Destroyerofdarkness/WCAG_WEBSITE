const express = require("express");

const app = express();

const cors = require("cors")

const default_router = require("./routes/default_routes")

require("dotenv").config();

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use(express.static("public"))

app.set("view engine", "ejs");

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET","POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.use(default_router)

app.listen(process.env.PORT, ()=>{
    console.log("Server running on port 3000 and host:", require("os").hostname())
})
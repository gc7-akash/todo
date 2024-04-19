const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./Router/mainRouter")
const dbConnection = require("./DatabaseConnection/dbConnection");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(router);

app.get("/",(req,res)=>{
    res.send("Home page is working fine")
})

app.listen(process.env.PORT,()=>{
    console.log("App is listning on PORT : "+process.env.PORT);
})
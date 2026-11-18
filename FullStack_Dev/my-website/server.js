const express = require("express");
const cors = require("cors");
const path =require("path")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(3000,function(){
    console.log("Server running on port 3000");
});
const express  =require("express")
const app = express()

const bodyparser = require("body-parser")
app.get("/",function(req,res){
    var a =2;
    if(a===23)
    res.send(" i m there 23")
    else{
        // res.write("hey i am there")
        res.sendFile(__dirname + "/index.html")
    }
    })

app.listen(3000,function(){
    console.log("i am here")
})

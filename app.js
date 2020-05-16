const express  =require("express")
const app = express()
app.set("view engine","ejs")
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
var newitem = []
var list = []
app.get("/",function(req,res){
   var today = new Date();
    //  var currentday = today.getDay();
     var day = "";
     var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     day = today.toLocaleDateString("en-US", options);
     res.render("list",{headings:day,newitem:newitem})
    })
    
app.post("/",function(req,res){
    var inp = req.body.value;
    console.log(req.body.list);
        if(req.body.list=="additems"){
            list.push(inp)
            res.redirect("/work")
        }else{
            newitem.push(inp);
            res.redirect("/")
        }
 
   
    // res.send("he wrote " + inp)
    
})
app.get("/work",function(req,res){
    res.render("list",{headings:"additems",newitem:list})
})
app.listen((process.env.PORT||3000),function(){
    console.log("i am here")
})
app.post("/work",function(req,res){
    var item = res.body.newitem;
    list.push(item)
})

   
    
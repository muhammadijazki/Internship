const express = require("express");     //importing express

const app = new express();              //initialising

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//API creation

app.get('/',(req,res)=>{
    res.json("korewa EREN YEAGER");
})

app.post('/sign',(req,res)=>{
    res.send(`My name is ${req.body.name} and  my age is ${req.body.age}`)
})

//setting port

app.listen(3005,()=>{
    console.log("server runnig...ok");
})
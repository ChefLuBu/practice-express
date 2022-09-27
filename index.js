const express = require("express");
const app = express();
const math = require("./math")
app.get("/:name", (req,res)=>{
    console.log(typeof req.query.a);
    console.log(req.params);
    let num1=req.query.a;
    let num2=req.query.b;
    const {a, b}=req.query
    let sum=math.sum(a,b);
    console.log(sum);
    res.send(`sum:${sum}`);
})

app.listen(8080, ()=> console.log("listening on 8080"))

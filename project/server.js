require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;
require('./routers/user.router')(app);
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message : "welcome to project"});
})


app.get('/nextMethod',(req,res,next)=>{
  next();
  console.log(req.next)
  res.send("After");
},(req,res)=>{
    console.log('before');
})


const A = (next,next1)=>{
  console.log("A method")
  next(next1)
}
const B = (next)=>{
    console.log("B method")
    next(next);
}

const C = ()=>{
    console.log("C Method"); 
  
}

A(B,C);

app.get('/chain',[A,B,C]);

app.listen(PORT, () => {
  console.log(`our server is running http://localhost:${PORT} `);
});

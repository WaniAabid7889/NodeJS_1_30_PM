const express = require('express');
const app = express();
const port = 1900;
const path = require('path');

const getUser = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    return result;
}


app.get('/user',(req,res)=>{
    let user =  getUser();
    user.then((val)=>{
        res.send(val);
    }).catch((err)=>{
        res.send(err);
    })
});

app.get('/user1',async (req,res)=>{
    let user =await  getUser();
    res.send(user);
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'home.html'));
});

app.get('/header',(req,res)=>{
    res.sendFile(path.join(__dirname, 'view', 'header.html'));
});

app.get('/about',(req,res,next)=>{
    next();
    
},(req,res)=>{ 
    res.sendFile(path.join(__dirname, 'view', 'about.html'));
});



app.get('/',(req,res)=>{
    res.send("welcome to our express js class");
})

app.listen(port,()=>{
    console.log(`our website is running : http://localhost:${port}`);
})

// you need to install npm i express and npm i nodemon
// we you run your application then use this command npx nodemon index.js
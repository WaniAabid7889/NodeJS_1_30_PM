const express = require('express');
const app = express();
const port = 1900;


app.get('/',(req,res)=>{
    res.send("welcome to our express js class");
})

app.listen(port,()=>{
    console.log(`our website is running : http://localhost:${port}`);
})

// you need to install npm i express and npm i nodemon
// we you run your application then use this command npx nodemon index.js
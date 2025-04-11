const express = require('express');
const app = express();
const port = 2002;
app.use(express.json());

require('./routers/user.router')(app);
app.get('/',(req,res)=>{
    res.status(200).json({message : "welcome to our project..!"});
})

app.listen(port,()=>{
    console.log(`your server is running port no : http://localhost:${port}`);
})
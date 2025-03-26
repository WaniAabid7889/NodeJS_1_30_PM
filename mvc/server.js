const express = require('express');
const app = express();
const PORT = 2001;

app.use(express.json());

require('./routers/user.routers.js')(app);

app.get("/",(req,res)=>{
    res.json({message : "welcome to our project"});
});

app.listen(PORT,()=>{
    console.log(`our application is running http://localhost:${PORT}`);
});
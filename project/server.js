require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3100;
require('./routers/user.router')(app);
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message : "welcome to project"});
})

app.listen(PORT, () => {
  console.log(`our server is running http://localhost:${PORT} `);
});

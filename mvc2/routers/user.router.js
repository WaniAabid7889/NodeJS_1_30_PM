const express = require('express');

const User = require('../modules/user.module');

module.exports = (app)=> {
    var router = express.Router();
    router.post('/insert',async (req,res)=>{
        let result = await User.AddUser(req.body);

        res.json({data : result});        
    })
    
    router.get('/',async(req,res)=>{
        let result = await User.showUser();
        res.json({data : result[0]});
    })
    app.use('/user',router); 
}
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

    router.post('/update/:id?',async(req,res)=>{
        let id = req.params.id;
        let data = req.body;
        let result = await User.updateUserById(data,id);
        res.status(200).json({data : result, message : "user update by id successfully"});
    })

    router.get('/delete/:id',async (req,res)=>{
        let id = req.params.id;
        let result = await User.deleteUserById(id);
        res.status(200).json({record : result, message : "user delete successfully by id"});
    })
    app.use('/user',router); 
}
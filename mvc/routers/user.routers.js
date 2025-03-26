const User = require('../modules/user.module.js');
let express = require('express');

module.exports = (app) =>{
    const router = express.Router();

    // app.get('/user',(req,res)=>{});
    // app.get('/user/:id',(req,res)=>{});
    // app.get('/user/update/:id',(req,res)=>{});

    router.get('/',async (req,res)=>{
        try {
            let response = await User.getUsers();
            return res.send(response);

        } catch (error) {
            return res.status(404).json({ message: "User not found" });
        }
    });

    router.get('/:id?',async (req,res)=>{
        try {
            let id=req.params.id;
            console.log(id);
            let response = await User.getUserById(id);
            console.log(response)
            return res.send(response);
        } catch (error) {
            return res.status(404).json({ message: "User not found y id" });
        }
    });

    router.get('/update/:id?',(req,res)=>{

    });

    router.get('/delete/:id?',(req,res)=>{

    });

    app.use('/user',router);
}
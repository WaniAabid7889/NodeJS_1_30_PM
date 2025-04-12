const express = require('express');

const User = require('../modules/user.module');

let users = [
    {"id": 101,"name": "shandan",address: "Delhi Gate Longi"},
    {"id": 102,"name": "Aabid",address: "Delhi Gate Longi"},
    {"id": 103,"name": "Faizan",address: "Delhi Gate Longi"},
]

module.exports = (app)=> {
    var router = express.Router();

    router.get('/getAll',async (req,res)=>{
        let result = await User.getUser();
        res.json({data : result});        
    })
    
   router.get("/:id?", async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ message: "User ID is required" });
    }
    try {
        const result = await User.getUserById(id);
        console.log("result id ", result);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})
    
    router.post("/add",(req,res)=>{
        let data = req.body;
        console.log(data);
        users.push(data)
        res.json({"dataInArr":users})
    })

    router.delete("/delete/:id",(req,res)=>{
        let id = req.params.id;
        const index = users.findIndex((val) => val.id === parseInt(id));
        console.log(index);
        if(index !== -1){
          users.splice(index, 1);
          res.json({data: users, message: "User deleted successfully"});
        } else {
          res.status(404).json({ message: "User not found" });
        }
    })
    app.use('/user',router); 
}
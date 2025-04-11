const express = require('express');

let users = [
    {"id": 101,"name": "shandan",address: "Delhi Gate Longi"},
    {"id": 102,"name": "Aabid",address: "Delhi Gate Longi"},
    {"id": 103,"name": "Faizan",address: "Delhi Gate Longi"},
]
module.exports = (app)=> {
    var router = express.Router();

    router.get('/getAll',(req,res)=>{

        res.json({"data":users}); 
        
    })
    
    router.get("/:id?",(req,res)=>{
        let id = req.params.id;
            let oneData=users.filter((item,index)=>{
                if(item.id ==id)
                    return item
            })
        res.json({"oneData":oneData});
    })
    
    router.post("/add",(req,res)=>{
        let data = req.body;
        console.log(data);
        users.push(data)
        res.json({"dataInArr":users})
    })

    router.delete("/delete/:id",(req,res)=>{
        let id = req.params.id;
        let restUser = users.filter((item)=>{
            if(item.id==id)
                return users.splice(indexOf(item),1);
        })
        res.json({"arr":restUser})
    })
    app.use('/user',router); 
}
const express = require("express");
let User = require("../modules/user.module");
module.exports = (app) => {
  app.use(express.json());
  let router = express.Router();

  router.get("/", async (req, res) => {
    let result = await User.getUsers();
    res
      .status(200)
      .json({ data: result, message: "get all user data", data: result });
  });

  router.post("/add", async (req, res) => {
    try {
      let result = await User.addUser(req.body);
      res
        .status(201)
        .json({ userdata: result, message: "User added successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to add user" });
    }
  });

  router.get("/:id?",async(req,res)=>{
    let id = req.params.id;
    let result = await User.getUserById(id);
    if(result.rowCount>0){
        res.status(200).json({data:result.rows[0],message:'record found by id'});
    } else { 
        res.status(404).json({ message: 'User not found' });
    }
  })


  router.delete("/:id", async (req, res) => {
      try{
        let id = req.params.id;
        let response = await User.deleteUser(id);
        res.status(200).json({ message: 'User deleted successfully' });
    }catch(error){
        console.error(error); res.status(500).json({ message: 'Failed to delete user' });
    }
  });

  app.use("/user", router);
};

const express = require("express");
const app = express();
const port = 1900;

const url = require('url');
app.use(express.json());

let users = [
  {
    id: 100,
    name: "abid",
    address: "Delhi Gate Ajmer",
  },
  {
    id: 101,
    name: "Hussain",
    address: "Delhi Gate Ajmer",
  },
  {
    id: 102,
    name: "shadan",
    address: "Delhi Gate Ajmer",
  },
];

app.get("/user", (req, res) => {
  let data = req.query;
  console.log(data);
  res.send(data);
});

app.get("/user/:id?", (req, res) => {
  //params
  let id = req.params.id;

  users.some((val) => {
    if (val.id == id) {
      res.send(users[val]);
    }
  });


 app.get("/query",(req,res)=>{
  let data = req.query;
  console.log(data);
  res.json(data);
})


//   users.findIndex((val, index) => {
//     if (val.id === parseInt(id)) {
//       res.send(val);
//     } else {
//       res.status(404).send({ message: "User not found" });
//     }
//   });
});

app.post("/insert", (req, res) => {
    let data = req.body;
    users.push(data);
    console.log(users);
    // res.send(users);
    res.json({data : users, message : "record add successfully"});
    
});

app.get("/", (req, res) => {
  res.send("welcome to our express js class");
});

app.put("/update/:id?", (req, res) => {
  let id = req.params.id;
  let data = req.body;
  const index = users.findIndex((val) => val.id == id);
  if (index !== -1) {
    users[index].name = data.name;
    users[index].address = data.address;
    res.json({data: users , message: "User updated successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/delete/:id?",(req,res)=>{
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

const getUser = () =>{
  console.log("verify this user");
}
app.get('/api',getUser,async(req,res)=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let result = await response.json();
  console.log(result);
  res.json({data : result , message : "Get All users "});
})



app.listen(port, () => {
  console.log(`our website is running : http://localhost:${port}`);
});

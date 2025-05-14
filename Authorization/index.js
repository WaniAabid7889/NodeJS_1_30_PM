const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const secretKey = 'your-secret-key';
app.use(express.json());

const path = require('path');


const user = {
    "username":"shadan@gamil.com",
    "password":"shadan@123",
    "role" : "admin"
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function authorizeAdmin(req, res, next) {
  console.log(req.user.role);
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/admin', authenticateToken, authorizeAdmin, (req, res) => {
  res.send('Admin dashboard');
});


app.get('/user', authenticateToken, (req, res) => {
  console.log('user')
  res.status(200).sendFile(path.join(__dirname, 'view', 'index.html'));
});


app.get('/token', (req, res) => {
  const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
  res.set("Authorization", `Bearer ${token}`).send(token);
  // res.send(token)
});


app.get('/',(req,res)=>{
  console.log("hello");
  res.send("we are here basic route");
})


let port = 3004
app.listen(port,()=>{
  console.log(`http://localhost:${port}`);
})
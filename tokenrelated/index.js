require("dotenv").config();
const express = require("express");
const jwt = require('jsonwebtoken');//(sign,verify,decode)
// console.log(jwt)
const app = express();
// console.log(process.env.PORT);
const PORT = process.env.PORT || 3100;
app.use(express.json());

const secret_key = 'be055e29307c65d041fcd6eaeaee461cc02833c604cb0dca90495c45b6d101ef3a3651569d98cf502e26034a49163827f65ba708f735d6adb0abdf4448101be3';


const user = {
    "username":"shadan@gamil.com",
    "password":"shadan@123",
    "role" : "admin"
}

app.get('/token_create',(req,res)=>{
    let token = jwt.sign({user},secret_key,{expiresIn:'1h'});
    res.send(token);
})

app.post('/verify_token', (req, res) => {
    const bearerToken = req.headers['authorization'];
    const token = req.body.token;
    console.log(token);
    if (!bearerToken) {
        return res.status(401).send('Access denied. No token provided.');
    }

    // res.send(bearerToken);

    let result = jwt.verify(token,bearerToken,(err,data)=>{
        if(err){
            throw error;
        }
        res.send(data);
    });












    // const token = bearerToken.split(' ')[1];
    // jwt.verify(token, secret_key, (err, decoded) => {
    //     if (err) {
    //         return res.status(401).send('Invalid token.');
    //     }
    //     res.send(decoded);
    // });
})


app.listen(PORT, () => {
  console.log(`our server is running http://localhost:${PORT} `);
});


//npm i jsonwebtoken
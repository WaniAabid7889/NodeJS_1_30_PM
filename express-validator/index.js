const express = require('express');
const { body, validationResult, query } = require('express-validator');
const app = express();
const PORT = 3300;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('We are learning express-validator');
});

app.post('/user_login', [
    body('username').not().isEmpty().withMessage("Username should not be empty"),
    body('password').isLength({ min: 6 }).withMessage("Password should be at least 6 characters"),
    body('email').isEmail().withMessage("only allowed valid email"),
    body('age').isInt({ min: 18, max: 22 }).withMessage("Age must be an integer between 18 and 22")
    ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    let data = req.body;
    res.status(200).json({ message: "Data received successfully", result: data })
})


app.get('/user',query('name').not().isEmpty().withMessage("name should not be empty!"),(req,res)=>{

    let name = req.query.name;
    
    console.log(name);
    let error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(422).json({error:errors.array()});
    }
    res.status(200).json({data : name, message:"name is fetch"});
    
})

app.listen(PORT, () => {
    console.log(`Our application is running: http://localhost:${PORT}`)
})

//https://express-validator.github.io/docs/guides/getting-started --> visit this link and learn express-validator
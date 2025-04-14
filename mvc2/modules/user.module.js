const db = require('../config/db');

async function AddUser(data){
    const {name,email,password,status} = data;
    const sql = "INSERT INTO users( `name`, `email`, `password`, `status`) VALUES (?,?,?,?)";
    const params = [name,email,password,status];
    const response = await db.execute(sql,params);
    return response;
}

async function showUser(){
    const sql = "SELECT * from users";
    const response = await db.execute(sql);
    return response.length> 0 ? response : null;
    
}

module.exports ={ AddUser , showUser}
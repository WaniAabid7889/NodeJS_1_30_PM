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


async function updateUserById(data,id){
    const {name,email,password,status} = data
     const sql = "UPDATE users SET  name = ? , email = ? , password = ?, status = ? where id = ? ";
     const params = [name,email,password,status,id];
     console.log(sql," ",params);
     const response = await db.execute(sql,params);
     return response;
}

async function deleteUserById(id){
    const sql = "DELETE FROM users WHERE id = ?"; 
    const params = [id];
    const response = await db.execute(sql, params);
    return response;
}


module.exports ={
    AddUser ,
    showUser, 
    updateUserById,
    deleteUserById
}
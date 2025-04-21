const db = require('../config/db');
async function getUsers() {
    let sql = "SELECT * from users";
    const response = await db.query(sql);
    return response.rows
}

async function addUser(data) {
    
    let {id,user_name,password,status} = data;
    
    let sql = `INSERT INTO users(id,user_name,password,status) values ($1,$2,$3,$4) RETURNING *`; 
    let params = [id,user_name,password,status];
    console.log(sql);
    console.log(params);
    let response = await db.query(sql,params);
    if(response.rowCount>0){
        return response.rows
    }
}

async function getUserById(id) {
    let sql = "SELECT * FROM users WHERE id = $1";
    const response = await db.query(sql, [id]);
    return response;
}

async function deleteUser(id) {
    let sql = "DELETE FROM users WHERE id = $1";
    const response = await db.query(sql, [id]);
    if(response.rowCount>0){
        return response.rows[0];
    }
}

module.exports={
    getUsers,
    addUser,
    getUserById,
    deleteUser

}
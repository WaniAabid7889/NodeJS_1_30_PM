//npm i mysql2 
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',    
    user: 'root',            
    password: '',            
    database: 'e_commerce', 
    port: 3306               
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to MySQL:", err.message);
    } else {
        console.log("Connected to MySQL database");
        connection.release(); 
    }
});
 // now get a Promise wrapped instance of that pool
 module.exports = pool.promise();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommerce',
    password: ' ',
    port: 5432,
})

if(pool.connect()) {
    console.log("connected to db")
}
module.exports = pool;
const mysql = require('mysql');
require('dotenv').config();
const conn = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// conn.connect();
conn.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`Connected as ID ` + connection.threadId);
});

module.exports = conn;

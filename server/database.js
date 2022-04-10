const mysql = require('mysql')
const config = require('./config/config.json')

const db = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.name 
})

module.exports = db;
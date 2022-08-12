const mysql = require('mysql2')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dftba4321',
    database: 'db_project',
    multipleStatements: true
})

db.connect((err) => {
    if(err){
      throw err
    }
    console.log('mysql connected')
})

module.exports = db;
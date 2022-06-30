const mysql = require('mysql2')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'sami',
    password: 'sami6620',
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
const express = require('express')
const db = require('../db/db');

const router = express.Router();


router.get('/employees',(req,res) =>{
    let sql = "SELECT * FROM employee";

    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.send(result)
    })

})


module.exports = router;
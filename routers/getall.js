const express = require('express')
const db = require('../db/db');

const router = express.Router();


router.get('/:tableName',(req,res) =>{

    const tableNo = req.params.tableName;

    let sql = `SELECT * FROM ${tableNo}`;

    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})



module.exports = router;
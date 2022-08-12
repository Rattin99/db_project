const express = require('express');
const db = require('../db/db');


const router = express.Router();

router.delete('/catalogue', (req,res) =>{
    console.log(req.body);
    const sql = `DELETE FROM catalogue where dish_name="${req.body.dishName}"`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})






module.exports = router;


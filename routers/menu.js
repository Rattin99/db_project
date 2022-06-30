const db = require('../db/db');
const express = require('express');

const router = express.Router();



router.get('/:category/:genre',(req,res) =>{
    const category = req.params.category;
    const genre = req.params.genre;

    if(category == 0) {
        const sql = `SELECT dish_name,quantity,price FROM catalogue WHERE genre = "${genre}";`
    
        db.query(sql,(err,result) =>{
            if(err) throw err;
            res.send(result);
        })

    }

    if(genre == 0) {
        const sql = `SELECT dish_name,quantity,price FROM catalogue 
        WHERE category = "${category}";`

        db.query(sql,(err,result) =>{
            if(err) throw err;
            res.send(result);
        })

    }

    if(category != 0 && genre != 0){
        const sql = `SELECT dish_name,quantity,price FROM catalogue 
        WHERE category = "${category}" AND genre = "${genre}";`
    
        db.query(sql,(err,result) =>{
            if(err) throw err;
            res.send(result);
        })
    }

   
})


module.exports = router;
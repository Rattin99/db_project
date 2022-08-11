const express = require('express')
const db = require('../db/db')


const router = express.Router();


router.get('/:item_name',(req,res) =>{
    const sql =  `SELECT item_name,quantity FROM inventory WHERE item_name = "${req.params.item_name}" ORDER BY quantity ;`

    db.query(sql,(err,result) => {
        if(err) throw err;

        res.send(result)
    })
})


router.put('/:item_name/:quantity',(req,res) =>{

    const quantity = req.params.quantity;

    console.log(req.params.item_name)

    const sql = `UPDATE inventory 
    SET 
        quantity = quantity - ${quantity}
    WHERE item_name = "${req.params.item_name}"`;

    db.query(sql,(err,result) =>{
        if(err) throw err;

        res.send(result);
    })
})


module.exports = router;
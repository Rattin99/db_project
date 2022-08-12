const express = require('express');
const db = require('../db/db');


const router = express.Router();

router.delete('/expenditure', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM expenditure where item_name="${req.body.item_name}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/inventory', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM inventory where item_name="${req.body.item_name}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/provider', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM provider where item_name="${req.body.item_name}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/catalogue', (req,res) =>{
    console.log(req.body);

    const sql = `
        DELETE FROM ingredient where dish_name="${req.body.dishName}";
        DELETE FROM catalogue where dish_name="${req.body.dishName}";
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/order', (req,res) =>{
    console.log(req.body);

    const sql = `
        DELETE FROM  where dish_name="${req.body.dish_name}";
        DELETE FROM order where dish_name="${req.body.dish_name}";
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/reservation', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM reservation where customer_id="${req.body.customer_id}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/customer', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM customer where customer_id="${req.body.customer_id}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/bill', (req,res) =>{
    console.log(req.body);

    const sql = `
        DELETE FROM item where bill_id="${req.body.bill_id}";
        DELETE FROM bill where bill_id="${req.body.bill_id}";
    `;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/employee', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM employee where employee_id="${req.body.employee_id}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})

router.delete('/emp_schedule', (req,res) =>{
    console.log(req.body);

    const sql = `DELETE FROM emp_schedule where employee_id="${req.body.employee_id}";`;

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
})






module.exports = router;


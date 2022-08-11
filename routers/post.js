const express = require('express')
const db = require('../db/db')


const router = express.Router();


router.post('/employee',(req,res) =>{
    const sql = `INSERT INTO employee (employee_id,employee_name,role,salary,supervisor) VALUES (${req.body.employee_id},"${req.body.employee_name}","${req.body.role}",${req.body.salary},"${req.body.supervisor}")`

    db.query(sql,(err,result) =>{
        if(err) throw err;
        res.send(result);
    })
})

router.post('/order',(req,res) => {
    const sql =  `INSERT INTO _order ( order_id, table_no, total_price, _time, _date) VALUES (${req.body.order_id},${req.body.table_no},${req.body.total_price},"${req.body._time}","${req.body._date}")`

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})

router.post('/bill',(req,res) =>{
    let sql = `INSERT INTO bill ( bill_id, customer_id,payment_total,payment_paid,payment_returned, _date,  _time ) VALUES (${req.body.bill_id},${req.body.customer_id},${req.body.payment_total},${req.body.payment_paid},${req.body.payment_returned},"${req.body._date}","${req.body._time}");`

    req.body.items.map((value, idx) => {
        sql += `INSERT INTO item ( bill_id, item_name ) VALUES (${req.body.bill_id},"${value}");`;
    });

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})

router.post('/catalogue',(req,res) =>{
    const sql = `INSERT INTO catalogue ( dish_name, genre, cook_item, quantity, price, category) 
    VALUES (" ${req.body.dish_name} "," ${req.body.genre} "," ${req.body.cook_item} "," ${req.body.quantity} "," ${req.body.price} "," ${req.body.category} ")`

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/customer',(req,res) =>{
    const sql = `INSERT INTO customer ( customer_id,name,contact,address) VALUES (${req.body.customer_id},"${req.body.name}","${req.body.contact}", "${req.body.address}")`

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/dishes',(req,res) =>{
    const sql = `INSERT INTO customer (order_id,dish_name) VALUES (${req.body.order_id},"${req.body.dish_name}")`

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/expenditure',(req,res) =>{
    const sql = `INSERT INTO expenditure (item_name,_type,quantity,_date,per_unit_price,_provider,total_price) 
    VALUES ("${req.body.item_name}","${req.body._type}","${req.body.quantity}","${req.body._date}","${req.body.per_unit_price}","${req.body.provider}",${req.body.quantity*req.body.per_unit_price})` 
    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/ingredient',(req,res) =>{
    const sql = `INSERT INTO ingredient (dish_name,ingredient_name) VALUES ("${req.body.dish_name}","${req.body.ingredient_name}")`

    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/inventory',(req,res) =>{
    const sql = `INSERT INTO inventory (item_id,item_name,quantity,_location) VALUES ("${req.body.item_id}","${req.body.item_name}",${req.body.quantity},"${req.body._location}")`

    
    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})


router.post('/reservation',(req,res) =>{
    const sql = `INSERT INTO reservation (customer_id,_table,no_of_guest)
    VALUES ("${req.body.customer_id}",${req.body.table_no},${req.body.no_of_guest})`
    
    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})

router.post('/emp_schedule',(req,res) =>{
    const sql = `INSERT INTO emp_schedule(employee_id,start_time,end_time,_date) VALUES (${req.body.employee_id},"${req.body.start_time}","${req.body.end_time}","${req.body._date}");`
    
    db.query(sql, (err,result) => {
        if(err) throw err; 
        res.send(result)
    })
})







module.exports = router;
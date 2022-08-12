const express = require('express')
const router = require('./routers/getall')
const postRouter = require('./routers/post');
const menu = require('./routers/menu')
const inventory = require('./routers/inventory') 

const app = express()

app.use(express.json())
app.use('/getall/',router)
app.use('/api/',postRouter);
app.use('/menu/',menu);
app.use('/inventory/',inventory)


// const port = Math.floor(Math.random()*(65536-49152)+49152).toString();
const port = 50001;
app.listen(port, () => {
    console.log('Server started on port ' + port + ":");
    console.log('http://localhost:' + port);
})



const express = require('express')
const router = require('./routers/getall')
const db = require('./db/db');




const app = express()

app.use('/getall/',router)


app.listen('3000', () => {
    console.log('Server started on port 3000')
})

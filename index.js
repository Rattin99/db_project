const express = require('express')
const router = require('./routers/getall')
const postRouter = require('./routers/post');
const menu = require('./routers/menu')
const inventory = require('./routers/inventory') 
const cors = require("cors")

const app = express()

app.use(cors({
    origin:"*" 
}))
app.use(express.json())
app.use('/getall/',router)
app.use('/api/',postRouter);
app.use('/menu/',menu);
app.use('/inventory/',inventory)



app.listen('3001', () => {
    console.log('Server started on port 3001')
})



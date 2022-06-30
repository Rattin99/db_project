const express = require('express')
const router = require('./routers/getall')
const postRouter = require('./routers/post');

const app = express()

app.use(express.json())
app.use('/getall/',router)
app.use('/api/',postRouter);



app.listen('3000', () => {
    console.log('Server started on port 3000')
})



const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config();
const router = require('./router/router')

//middleware
app.use(cors({
    origin: `${process.env.frontendUrl}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
    
}))
app.use(express.json())


//database connection 
connectDB();

//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
    }
)
app.use('/api', router)



app.listen(port, () => {
    console.log(`server is starting at http://localhost:${port}`)
    }
)
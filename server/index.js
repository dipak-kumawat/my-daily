const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const connectDB = require('./config/db')
require('dotenv').config();
const router = require('./router/router')

// Basic CORS setup and middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json())


//database connection 
connectDB();

//routes
app.get('/', (req, res) => {
    res.send('server is started!')
    }
)

// Function to log request and data
function logRequestData(req, res, next) {
    const currentTime = new Date().toLocaleString(); // Get current date and time
    console.log('--- Incoming Request ---');
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    // console.log('Headers:', req.headers);
    console.log(`Timestamp: ${currentTime}`);

    if (req.body && Object.keys(req.body).length > 0) {
      console.log('Body:', req.body);
    } else {
        console.log('Body: No data sent');
    }
    console.log('------------------------');
    next(); // Pass the request to the next middleware or route handler
  }
  
  // Apply the logging middleware
  app.use(logRequestData);
app.use('/api', router)



app.listen(port, () => {
    console.log(`server is starting at http://localhost:${port}`)
    }
)
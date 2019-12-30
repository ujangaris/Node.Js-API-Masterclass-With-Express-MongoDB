const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger')


// Route file
const bootcamps = require('./routes/bootcamps')


//Load env vars
dotenv.config({
    path: './config/config.env'
});


const app = express();

app.use(logger);

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)


const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`));
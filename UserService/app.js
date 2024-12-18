const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const { connectDB } = require('./config/db');

const app = express();
app.use(bodyParser.json());

// require("dotenv").config({ path: './config/.env' });

connectDB();
app.use('/user', userRoutes);

app.listen(5001, () => console.log('User Service running on port 5001'));

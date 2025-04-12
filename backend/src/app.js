const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/v1/auth', authRoutes);

// Status check
app.get('/', (req, res) => res.send('Green Tree Banking API is running.'));

module.exports = app;

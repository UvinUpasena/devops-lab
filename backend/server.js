const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import employee routes (we'll build this next)
const employeeRoutes = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes API mounting
app.use('/api/employees', employeeRoutes);

// Health check endpoint for container monitoring
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
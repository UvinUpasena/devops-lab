const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/employees - Fetch all employees
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM employees ORDER BY id DESC');
        res.json({
            total_employees: rows.length,
            employees: rows
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/employees/add - Add a new employee
router.post('/add', async (req, res) => {
    const { name, email, department, salary } = req.body;

    if (!name || !email || !department || !salary) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const [result] = await db.query(
            'INSERT INTO employees (name, email, department, salary) VALUES (?, ?, ?, ?)',
            [name, email, department, salary]
        );
        res.status(201).json({ status: 'success', id: result.insertId });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
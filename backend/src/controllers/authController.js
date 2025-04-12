const bcrypt = require('bcryptjs');
const db = require('../models/db'); // Your DB helper

exports.register = async (req, res) => {
    const { email, password, full_name } = req.body;

    // Basic validation
    if (!email || !password || !full_name) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if user already exists
        const [existing] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
        if (existing.length > 0) {
            return res.status(409).json({ message: 'User already exists.' });
        }

        // Hash password
        const hashed = await bcrypt.hash(password, 10);

        // Insert user
        const sql = 'INSERT INTO users (email, password_hash, full_name) VALUES (?, ?, ?)';
        await db.promise().query(sql, [email, hashed, full_name]);

        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error. Could not register user.' });
    }
};

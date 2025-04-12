const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

exports.register = async (req, res) => {
    const { email, password, full_name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (email, password_hash, full_name) VALUES (?, ?, ?)';
    db.query(sql, [email, hashedPassword, full_name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'User registered' });
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ?';

    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};

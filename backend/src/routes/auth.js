const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.json({ message: 'Registration route works' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'Login route works' });
});

module.exports = router;

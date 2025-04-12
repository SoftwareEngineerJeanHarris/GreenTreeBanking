const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', (req, res) => {
    res.json({ message: 'Registration route works' });
});

router.post('/login', (req, res) => {
    res.json({ message: 'Login route works' });
});

router.post('/register', authController.register);

module.exports = router;

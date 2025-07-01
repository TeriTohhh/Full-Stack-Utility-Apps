const express = require('express');
const router = express.Router();

const taskRoutes = require('./taskRoutes');
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;

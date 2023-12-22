const express = require('express');

const router = express.Router();

const tasks = [];

router.get('/tasks', (req, res) => {
	res.status(200).json(tasks);
})

module.exports = router;
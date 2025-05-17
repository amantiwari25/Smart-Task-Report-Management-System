
// backend/routes/tasks.js
const express = require('express');
const router = express.Router();

// Dummy tasks DB
let tasks = [];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.post('/', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).json(task);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks[id] = req.body;
    res.json(tasks[id]);
});

router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks[id] = { ...tasks[id], ...req.body };
    res.json(tasks[id]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks.splice(id, 1);
    res.status(204).send();
});

module.exports = router;

const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

// Apply auth middleware to all task routes
router.use(auth);

// Define routes - simplified format to avoid path-to-regexp errors
router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;

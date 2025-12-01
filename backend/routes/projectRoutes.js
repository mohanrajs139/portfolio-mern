    const express = require('express');
const router = express.Router();
const { getProjects, createProject, updateProject, deleteProject } = require('../controllers/projectController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

// Public fetch of projects
router.get('/', getProjects);

// Admin-only CRUD
router.post('/', protect, isAdmin, createProject);
router.put('/:id', protect, isAdmin, updateProject);
router.delete('/:id', protect, isAdmin, deleteProject);
module.exports = router;

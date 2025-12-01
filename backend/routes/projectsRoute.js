import express from 'express';
import Project from '../models/Project.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
});

// Create project (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, technologies, category, github, demo } = req.body;

    // Validation
    if (!title || !description || !technologies || !category) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProject = new Project({
      title,
      description,
      technologies: Array.isArray(technologies) ? technologies : [technologies],
      category,
      github,
      demo,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
});

// Update project (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, technologies, category, github, demo } = req.body;

    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Update fields
    if (title) project.title = title;
    if (description) project.description = description;
    if (technologies) project.technologies = Array.isArray(technologies) ? technologies : [technologies];
    if (category) project.category = category;
    if (github) project.github = github;
    if (demo) project.demo = demo;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
});

// Delete project (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
});

export default router;

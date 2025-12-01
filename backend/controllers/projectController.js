const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ message: 'Error fetching projects' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { title, description, link, image } = req.body;

    // Validation
    if (!title || !description || !link) {
      return res.status(400).json({ message: 'Title, description, and link are required' });
    }

    const payload = { 
      title,
      description,
      link,
      image: image || '',
      owner: req.user?._id,
      createdAt: new Date()
    };

    const project = await Project.create(payload);
    res.status(201).json(project);
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(400).json({ message: err.message || 'Error creating project' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, link, image } = req.body;

    // Validation
    if (!title || !description || !link) {
      return res.status(400).json({ message: 'Title, description, and link are required' });
    }

    const updated = await Project.findByIdAndUpdate(
      id, 
      { title, description, link, image: image || '' },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(updated);
  } catch (err) {
    console.error('Error updating project:', err);
    res.status(400).json({ message: err.message || 'Error updating project' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully', deletedId: id });
  } catch (err) {
    console.error('Error deleting project:', err);
    res.status(400).json({ message: err.message || 'Error deleting project' });
  }
};

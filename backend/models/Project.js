const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  technologies: {
    type: [String],
    default: []
  },
  category: {
    type: String,
    enum: ['web', 'game', 'mobile', 'other'],
    default: 'web'
  },
  github: {
    type: String,
    trim: true,
    match: [
      /^https?:\/\/.+/,
      'Please provide a valid URL'
    ]
  },
  demo: {
    type: String,
    trim: true,
    match: [
      /^https?:\/\/.+/,
      'Please provide a valid URL'
    ]
  },
  image: {
    type: String,
    trim: true,
    default: ''
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);

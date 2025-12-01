const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');

dotenv.config();

const seedProjects = async () => {
  try {
    await connectDB();

    // Check if projects already exist
    const count = await Project.countDocuments();
    if (count > 0) {
      console.log('✓ Projects already exist in database');
      process.exit(0);
    }

    const defaultProjects = [
      {
        title: 'CricketDa',
        description: 'Live Cricket Score Web App - A real-time cricket scoring application built with React and Vite. Features live match updates, player statistics, and team information with ES6+ JavaScript.',
        link: 'https://cricketda-demo.com',
        image: ''
      },
      {
        title: 'Personal Portfolio Website',
        description: 'A responsive portfolio website showcasing projects and skills. Built with HTML, CSS, and JavaScript with smooth animations and modern design principles.',
        link: 'https://portfolio-demo.com',
        image: ''
      },
      {
        title: 'Stone-Paper-Scissors Game',
        description: 'Interactive game implementation using JavaScript with DOM manipulation and event handling. Features score tracking, animations, and responsive game interface.',
        link: 'https://stone-paper-scissors-demo.com',
        image: ''
      }
    ];

    const inserted = await Project.insertMany(defaultProjects);
    console.log(`✓ Successfully seeded ${inserted.length} default projects`);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
    process.exit(1);
  }
};

seedProjects();

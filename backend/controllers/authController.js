const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  
  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please provide name, email, and password' });
  }

  try {
    // Check if JWT_SECRET is set
    if (!process.env.JWT_SECRET) {
      console.error('ERROR: JWT_SECRET is not set in .env file');
      return res.status(500).json({ message: 'Server configuration error: JWT_SECRET not set' });
    }

    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // First user becomes admin
    const count = await User.countDocuments();
    const user = await User.create({ 
      name, 
      email, 
      password: hashedPassword, 
      isAdmin: count === 0 
    });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    
    console.log('✓ User registered successfully:', email);
    
    res.status(201).json({ 
      user: { 
        _id: user._id,
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin 
      }, 
      token 
    });
  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ message: err.message || 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    
    res.status(200).json({ 
      user: { 
        _id: user._id,
        name: user.name, 
        email: user.email, 
        isAdmin: user.isAdmin 
      }, 
      token 
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: err.message || 'Login failed' });
  }
};

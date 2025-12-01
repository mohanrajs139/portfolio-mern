const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error(
        'MONGO_URI is not defined in .env file.\n' +
        'Please add MONGO_URI=your_mongodb_connection_string to .env\n' +
        'See FIX_LOGIN_ERROR.md for detailed setup instructions'
      );
    }
    
    console.log('⏳ Connecting to MongoDB...');
    console.log('   URI:', process.env.MONGO_URI.substring(0, 40) + '...');
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    
    console.log('✓ MongoDB connected successfully');
    console.log('✓ Database ready to use');
  } catch (err) {
    console.error('✗ MongoDB connection error:', err.message);
    console.error('\n📋 SOLUTION:');
    console.error('1. Check your .env file has MONGO_URI set');
    console.error('2. If using MongoDB Atlas, verify connection string');
    console.error('3. If using local MongoDB, ensure MongoDB service is running');
    console.error('4. Read FIX_LOGIN_ERROR.md for detailed instructions\n');
    process.exit(1);
  }
};

module.exports = connectDB;

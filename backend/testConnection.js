#!/usr/bin/env node

/**
 * Test MongoDB Connection
 * Run this to verify MongoDB is properly configured
 * Usage: node testConnection.js
 */

const mongoose = require('mongoose');
require('dotenv').config();

console.log('\n🔍 Testing MongoDB Connection...\n');

// Check environment variables
console.log('📋 Environment Check:');
console.log('   MONGO_URI set:', !!process.env.MONGO_URI ? '✓ Yes' : '✗ No');
console.log('   JWT_SECRET set:', !!process.env.JWT_SECRET ? '✓ Yes' : '✗ No');
console.log('   PORT:', process.env.PORT || '5000 (default)');

if (!process.env.MONGO_URI) {
  console.error('\n❌ ERROR: MONGO_URI is not set in .env file');
  console.log('\n📖 Please read FIX_LOGIN_ERROR.md for setup instructions\n');
  process.exit(1);
}

console.log('\n   MONGO_URI:', process.env.MONGO_URI.substring(0, 50) + '...\n');

// Test connection
console.log('⏳ Attempting connection...\n');

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log('✅ SUCCESS: MongoDB connected successfully!\n');
  console.log('🎉 Your backend should now work.\n');
  console.log('📝 Next steps:');
  console.log('   1. Make sure backend is running: npm run dev');
  console.log('   2. Try registering a new account');
  console.log('   3. Login and use your portfolio\n');
  process.exit(0);
})
.catch((err) => {
  console.error('❌ FAILED: Could not connect to MongoDB\n');
  console.error('Error Details:', err.message);
  console.log('\n🔧 Common Solutions:');
  console.log('   1. Check MONGO_URI is correct in .env');
  console.log('   2. If using Atlas: Verify username and password');
  console.log('   3. If using local: Start MongoDB service');
  console.log('   4. Check internet connection');
  console.log('   5. Read FIX_LOGIN_ERROR.md for detailed help\n');
  process.exit(1);
});

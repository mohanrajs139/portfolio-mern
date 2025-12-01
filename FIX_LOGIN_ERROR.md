# 🔧 Fix: 500 Error on Login/Register

## Problem
You're getting 500 errors on `/api/auth/login` and `/api/auth/register` endpoints.

## Root Cause
Your MongoDB is not connected. Your `.env` file has:
```
MONGO_URI=mongodb://localhost:27017/portfolioDB
```

But MongoDB is not running locally on your machine, so the database connection fails.

---

## ✅ Solution: Use MongoDB Atlas (Cloud)

### Step 1: Create Free MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up" (top right)
3. Fill in the form and create account
4. Verify your email

### Step 2: Create a Free Cluster
1. After login, click "Create a deployment"
2. Choose **M0 Shared** (Free tier)
3. Click "Create Cluster"
4. Wait 2-3 minutes for cluster to be created

### Step 3: Get Connection String
1. Go to "Databases" in left sidebar
2. Click "Connect" button on your cluster
3. Choose "Driver" option
4. Select "Node.js" and version "5.9+"
5. Copy the connection string
6. It looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Step 4: Update Your .env File
Replace the MONGO_URI with your connection string from Atlas:

```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolioDB?retryWrites=true&w=majority
JWT_SECRET=mySecretKey123
PORT=5000
```

**Important:** Replace `username:password` with your Atlas credentials!

### Step 5: Restart Backend Server
```bash
# Stop the server (press Ctrl+C in backend terminal)
npm run dev
```

You should now see: `✓ MongoDB connected successfully`

---

## 🚀 Alternative: Use Local MongoDB

If you want to use local MongoDB instead:

### Step 1: Download MongoDB Community Edition
- Go to: https://www.mongodb.com/try/download/community
- Download for your OS (Windows)
- Install it

### Step 2: Start MongoDB Service
**Windows:**
```bash
# MongoDB starts automatically after installation
# Or manually start:
net start MongoDB
```

### Step 3: Your .env is Already Set
No changes needed - it's already set to `localhost:27017`

### Step 4: Verify Connection
```bash
# You should see: ✓ MongoDB connected successfully
npm run dev
```

---

## 🐛 Troubleshooting

### Error: "Cannot connect to MongoDB"
1. Check MONGO_URI is correct
2. If using Atlas: Verify username/password in connection string
3. If using local: Make sure MongoDB service is running

### Error: "JWT_SECRET is not set"
Add to your .env file:
```
JWT_SECRET=anyRandomStringHere123
```

### Error: "Connection refused" (localhost)
1. MongoDB service is not running
2. Windows: `net start MongoDB`
3. Mac: `brew services start mongodb-community`

### Still Getting 500 Error?
1. Stop backend server (Ctrl+C)
2. Check server terminal for error messages
3. Restart with: `npm run dev`
4. Look at the console output carefully

---

## ✅ Verification

Once fixed, you should see in backend terminal:
```
✓ MongoDB connected successfully
✓ Server running on http://localhost:5000
```

Then try login/register again - it should work!

---

## 📋 Quick Checklist

- [ ] Created MongoDB Atlas account OR local MongoDB running
- [ ] Got MONGO_URI connection string
- [ ] Updated .env file with correct MONGO_URI
- [ ] Backend shows "✓ MongoDB connected successfully"
- [ ] Try register - should work now
- [ ] Try login - should work now

---

## 🎯 Next Steps After Fix

1. Register a new account (first user = admin)
2. Login to your portfolio
3. Add some projects
4. Test all features

---

**Common Tips:**
- MongoDB Atlas is recommended (easier, cloud-based)
- Keep your connection string private
- Never commit .env file to GitHub
- Add .env to .gitignore

---

**Still having issues?** Check the backend server terminal output for specific error messages!

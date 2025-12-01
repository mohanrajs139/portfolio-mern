# ⚡ Quick Fix Card - Login 500 Error

## 🎯 The Issue
Getting 500 errors on login/register API calls

## ✅ The Solution
Restart your backend server - I've updated the code to handle errors better

---

## 🚀 What To Do (2 Steps)

### Step 1️⃣: Restart Backend
```bash
# In backend terminal, press Ctrl+C to stop
# Then run:
npm run dev
```

**Should see:**
```
✓ Server running on http://localhost:5000
✓ MongoDB connected successfully
```

### Step 2️⃣: Refresh Frontend & Test
- Browser: Press `Ctrl+Shift+R` (hard refresh)
- Try registering a new account
- Should work now!

---

## 🔍 Check Backend Output

Look for these in backend terminal:
```
POST /api/auth/register   ← Request arriving
POST /api/auth/login      ← Request arriving
```

If you see these, login is working!

---

## 🆘 If Still Not Working

Run this to test MongoDB:
```bash
node testConnection.js
```

Should say: `✅ SUCCESS: MongoDB connected successfully!`

---

## 📋 Files Updated

- ✅ server.js
- ✅ config/db.js
- ✅ controllers/authController.js

---

## ⏱️ Time to Fix: 2 minutes

That's it! Restart backend and try again.

---

**Questions?** Read `FIX_LOGIN_ERROR.md` or `COMPLETE_FIX_GUIDE.md`

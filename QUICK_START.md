# Quick Start Guide

## 🚀 Get Your Portfolio Running in 5 Minutes

### Step 1: Backend Setup

```bash
# 1. Navigate to backend
cd backend

# 2. Install dependencies
npm install

# 3. Create .env file
# Copy from .env.example and update with:
# - MONGO_URI: Your MongoDB connection string
# - JWT_SECRET: Any random string (e.g., "mySecretKey123")
# - PORT: 5000 (default)
# - NODE_ENV: development

# 4. Start backend server
npm run dev
# ✓ Server should be running on http://localhost:5000
```

### Step 2: Frontend Setup

```bash
# 1. Open a NEW terminal and navigate to frontend
cd frontend

# 2. Install dependencies
npm install

# 3. Start React app
npm start
# ✓ App will open on http://localhost:3000
```

### Step 3: First Time User

1. **Register**: Click "Register" and create your first account
   - First user automatically becomes admin
   - You'll get a JWT token (stored in localStorage)

2. **Login**: Use your credentials to log in

3. **Add Projects** (As Admin):
   - Scroll to Projects section
   - Fill in project details
   - Click "Add Project"

4. **Edit/Delete**: Hover over projects to see edit/delete buttons

---

## 🔑 Environment Variables

### Backend .env Template

```
# MongoDB - Get from MongoDB Atlas
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# Any random string for JWT signing
JWT_SECRET=your_random_secret_key_here

# Server config
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

---

## 📱 Features Overview

### ✨ Animations & Transitions
- Smooth fade-in effects on page load
- Slide animations for sections
- Hover effects on buttons and cards
- Gradient text animations
- Bounce scroll indicator
- Staggered animations for lists

### 🔐 Authentication
- User registration and login
- First user becomes admin
- JWT token-based auth
- Protected routes

### 📊 Projects Management
- View all projects
- Admin: Create, Edit, Delete projects
- Image support
- Project links to live demos

### 🎨 Responsive Design
- Works on desktop, tablet, mobile
- Mobile hamburger menu
- Responsive grid layouts
- Touch-friendly buttons

### ✅ Form Validation
- Email format validation
- Required field checking
- Success/Error messages
- Real-time error clearing

---

## 🐛 Troubleshooting

### "Cannot GET /api/projects"
- ✓ Ensure backend is running on port 5000
- ✓ Check MONGO_URI in .env
- ✓ Verify MongoDB Atlas connection

### "Login/Register not working"
- ✓ Check backend is running
- ✓ Verify JWT_SECRET is set in .env
- ✓ Check browser console for errors

### "Projects not showing"
- ✓ Make sure you're logged in
- ✓ Check MongoDB for data
- ✓ Verify API response in browser DevTools

### "Style not loading"
- ✓ Hard refresh browser (Ctrl+Shift+R)
- ✓ Check CSS files are in correct path
- ✓ Restart React app

---

## 📚 Project Structure

```
portfolio-mern/
├── backend/           # Node.js + Express server
│   ├── config/        # Database config
│   ├── controllers/    # Business logic
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── middleware/    # Auth middleware
│   ├── server.js      # Main server file
│   └── .env           # Environment variables
│
└── frontend/          # React application
    ├── public/        # Static files
    ├── src/
    │   ├── components/
    │   │   ├── Home.js
    │   │   ├── About.js
    │   │   ├── Projects.js
    │   │   ├── Skills.js
    │   │   ├── Contact.js
    │   │   ├── Navbar.js
    │   │   └── Auth/
    │   │       ├── Login.js
    │   │       └── Register.js
    │   ├── context/   # Auth context
    │   ├── css/       # Component styles
    │   └── App.js     # Main app
    └── package.json
```

---

## 🎨 Customization

### Change Colors
Edit `frontend/src/css/Navbar.css` (CSS variables):
```css
:root {
  --bg: #0d1117;
  --accent: #00f7ff;
  --accent2: #ff4ecd;
}
```

### Change Animations Duration
Edit `frontend/src/App.css` animations duration:
```css
@keyframes slideInUp {
  animation-duration: 1s; /* Change this */
}
```

### Add More Skills
Edit `frontend/src/components/Skills.js`:
```javascript
const skillsData = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  // Add more here
};
```

---

## 📖 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - Login to account

### Projects
- `GET /api/projects` - Get all projects (public)
- `POST /api/projects` - Create project (admin only)
- `PUT /api/projects/:id` - Update project (admin only)
- `DELETE /api/projects/:id` - Delete project (admin only)

---

## 🚀 Deployment Options

### Backend Deployment
- **Heroku**: Free tier available
- **Render**: Free tier available
- **Railway**: Affordable option
- **Replit**: Free for learning

### Frontend Deployment
- **Vercel**: Free, works great with React
- **Netlify**: Free and easy
- **GitHub Pages**: Free but limited features

---

## ✅ Checklist Before Deploying

- [ ] Add .env to .gitignore
- [ ] Test registration and login
- [ ] Test project CRUD operations
- [ ] Test all animations work
- [ ] Test on mobile device
- [ ] Update portfolio content
- [ ] Add your actual projects
- [ ] Test contact form
- [ ] Check console for errors
- [ ] Update README with your info

---

## 🤝 Support

If you encounter issues:
1. Check the browser console (F12)
2. Check the server terminal for errors
3. Verify .env file has all required variables
4. Restart both frontend and backend
5. Clear localStorage and cache
6. Try in a different browser

---

## 🎓 Learning Resources

- **React**: https://react.dev
- **Express**: https://expressjs.com
- **MongoDB**: https://docs.mongodb.com
- **JWT**: https://jwt.io
- **CSS Animations**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

---

Happy coding! 🚀

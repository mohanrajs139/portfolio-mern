# Quick Start Guide - Updated Portfolio

## 🚀 Running Your Updated Portfolio

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or connection string configured

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Setup Environment Variables
Create a `.env` file in the `backend` folder:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Step 3: Seed Initial Projects (Optional)
```bash
cd backend
node seed.js
```
This will add your 3 projects to the database:
- CricketDa
- Personal Portfolio Website
- Stone-Paper-Scissors Game

### Step 4: Start Backend Server
```bash
npm start
# Server runs on http://localhost:5000
```

### Step 5: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 6: Start Frontend Development Server
```bash
npm start
# App runs on http://localhost:3000
```

---

## 🎯 What's New

### Design Updates
- ✅ Modern professional layout with 2-column designs
- ✅ Smooth animations and transitions throughout
- ✅ Gradient accents and professional shadows
- ✅ Your actual resume content integrated
- ✅ Mobile-responsive design
- ✅ Professional navigation with title
- ✅ Enhanced contact form and footer

### Content Updates
- ✅ Home: Your name, title, and statistics
- ✅ About: Education, skills, achievements
- ✅ Skills: 4 categories organized by type
- ✅ Projects: Your 3 real projects
- ✅ Contact: Pre-filled with your info
- ✅ Footer: Contact details displayed

### Features
- ✅ Smooth scroll behavior
- ✅ Staggered animations
- ✅ Hover effects and transitions
- ✅ Form validation
- ✅ Admin dashboard access (admin/admin123)
- ✅ Professional color scheme
- ✅ Accessibility compliance

---

## 👤 Test Accounts

### User Login
- Email: `user@example.com`
- Password: `password123`
- (Create new account via Register)

### Admin Login
- Username: `admin`
- Password: `admin123`
- Access: Dashboard, Projects Management, Users

---

## 📂 Project Structure

```
portfolio-mern/
├── backend/
│   ├── config/db.js              # MongoDB connection
│   ├── controllers/              # API logic
│   ├── models/                   # Database schemas
│   ├── routes/                   # API endpoints
│   ├── middleware/               # Auth, logging
│   ├── seed.js                   # Data seeding
│   ├── server.js                 # Main server file
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── css/                  # Component styles
│   │   ├── context/              # Auth context
│   │   ├── App.js                # Main app
│   │   └── index.js              # React entry
│   ├── public/                   # Static files
│   └── package.json
│
└── README files
    ├── PORTFOLIO_REDESIGN_SUMMARY.md
    └── QUICK_START_GUIDE.md
```

---

## 🎨 Customization Guide

### Change Colors
Edit `/frontend/src/css/Navbar.css` CSS variables or update individual component CSS files:
```css
--accent: #0066cc;        /* Change primary blue */
--accent-dark: #004999;   /* Change dark blue */
--bg-dark: #1a1a1a;       /* Change dark text color */
```

### Update Content
- **About**: Edit `frontend/src/components/About.js`
- **Skills**: Edit `frontend/src/components/Skills.js`
- **Projects**: Add via admin dashboard or edit `backend/seed.js`
- **Contact Info**: Edit `frontend/src/components/Footer.js`

### Modify Animations
Edit animation timing in CSS files:
```css
animation: slideInUp 0.8s ease-out;  /* Change duration/easing */
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
npx kill-port 5000

# Kill process on port 3000 (frontend)
npx kill-port 3000
```

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify database credentials

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Restart frontend development server
- Check CSS file paths in imports

### Projects Not Showing
- Run seed script: `node backend/seed.js`
- Check browser console for API errors
- Verify MongoDB connection

---

## 📱 Responsive Testing

Test on different screen sizes:
- **Desktop**: 1440px (1440x900)
- **Tablet**: 768px (768x1024)
- **Mobile**: 375px (375x667)

Use Chrome DevTools (F12) → Responsive Design Mode

---

## 🔒 Security Notes

- Never commit `.env` file to version control
- Change JWT_SECRET for production
- Use environment variables for sensitive data
- Implement rate limiting for production
- Use HTTPS in production

---

## 📞 Contact Info (Auto-Populated)

- **Name**: Mohanraj
- **Email**: mohanrajs139@gmail.com
- **Phone**: +91 82483 68606
- **Location**: Sundararajan, Coimbatore
- **Title**: Front-End Developer

---

## ✨ Pro Tips

1. **Admin Dashboard**: Log in as admin to add/edit/delete projects
2. **Mobile Preview**: Use DevTools responsive mode during development
3. **Performance**: Check Lighthouse (DevTools → Lighthouse tab)
4. **SEO**: Update meta tags in `public/index.html`
5. **Analytics**: Consider adding Google Analytics for production

---

**Happy coding! Your portfolio is now professionally designed and ready to impress!** 🎉


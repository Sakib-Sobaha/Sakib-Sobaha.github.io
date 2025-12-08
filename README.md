# 🚀 Sakib Mohammed Sobaha - Portfolio

A modern, responsive portfolio website built with React.js and Node.js, featuring stunning animations and an interactive spider web background effect.

![Portfolio Preview](https://img.shields.io/badge/Status-In%20Development-blue)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Interactive Spider Web Background** - Canvas-based particle animation that responds to mouse movement
- **Smooth Animations** - Powered by Framer Motion for buttery-smooth transitions
- **Typing Effect** - Dynamic text animation for the hero section
- **Responsive Design** - Looks great on all devices
- **Modern UI/UX** - Clean, professional design with gradient accents
- **Smooth Scrolling** - Seamless navigation between sections

## 📑 Sections

| Section | Description |
|---------|-------------|
| 🏠 **Home** | Hero section with typing animation and CTA buttons |
| 👤 **About** | Personal introduction with stats and info cards |
| 💻 **Skills** | Technical skills with animated progress bars |
| 🎯 **Projects** | Filterable project showcase with hover effects |
| 🏆 **Certifications** | Professional certifications display |
| 📚 **Publications** | Research papers and technical articles |
| 📧 **Contact** | Contact form and social links |

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - UI Library
- **Vite** - Build Tool
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Axios** - HTTP Client
- **CSS3** - Styling with custom properties

### Backend
- **Node.js** - Runtime
- **Express.js** - Web Framework
- **MongoDB** - Database (with Mongoose ODM)
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

### Running the Application

**Frontend (Development)**
```bash
cd frontend
npm run dev
```
The frontend will be available at `http://localhost:5173`

**Backend (Development)**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:5000`

### Building for Production

```bash
cd frontend
npm run build
```

## 📁 Project Structure

```
Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Publications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SpiderWeb.jsx
│   │   │   └── TypeWriter.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── package.json
│   └── server.js
│
├── .gitignore
└── README.md
```

## 🎨 Customization

### Changing Colors
The color scheme uses CSS custom properties. Main colors:
- Primary: `#6366f1` (Indigo)
- Secondary: `#a855f7` (Purple)
- Accent: `#64c8ff` (Cyan)
- Background: `#000000` (Black)

### Adding Projects
Edit the `projects` array in `frontend/src/components/Projects.jsx`

### Updating Skills
Modify the `skillCategories` array in `frontend/src/components/Skills.jsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sakib Mohammed Sobaha**

- GitHub: [@sakib](https://github.com/sakib)
- LinkedIn: [Sakib Mohammed Sobaha](https://linkedin.com/in/sakib)
- Email: sakib@example.com

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Vite](https://vitejs.dev/) for the blazing fast build tool

---

<p align="center">Made with ❤️ and ☕</p>


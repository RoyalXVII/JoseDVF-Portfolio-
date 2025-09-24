# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring interactive programming language icons and a projects showcase section.

## Features

- 🎨 **Modern Design**: Beautiful gradient backgrounds and glassmorphism effects
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Interactive Icons**: Reactive programming language icons with hover effects and animations
- 🚀 **Project Showcase**: Dedicated section for displaying external websites and projects
- 🌟 **Smooth Animations**: CSS animations and transitions for enhanced user experience
- 🔗 **Social Links**: Easy navigation to social media profiles and contact information

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library
- **JavaScript (ES6+)** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information
Update the following files to customize with your information:

- **src/components/Hero.jsx** - Update name, bio, and profile information
- **src/components/Footer.jsx** - Update email and social media links
- **src/components/Projects.jsx** - Replace sample projects with your actual projects

### Skills Section
Modify **src/components/Skills.jsx** to:
- Add or remove programming languages/technologies
- Update skill levels
- Change icons and colors

### Projects Section
Update **src/components/Projects.jsx** to:
- Add your actual projects
- Update project images, descriptions, and links
- Modify technologies used for each project

### Styling
- Colors and themes can be customized in **tailwind.config.js**
- Additional custom animations can be added in the Tailwind config
- Component-specific styles are inline using Tailwind utilities

## Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero/landing section
│   ├── Skills.jsx      # Programming languages & skills
│   ├── Projects.jsx    # Project showcase
│   └── Footer.jsx      # Contact info & social links
├── App.jsx            # Main app component
├── index.css          # Global styles with Tailwind
└── main.jsx          # App entry point
```

## Interactive Features

### Reactive Icons
- **Hover Effects**: Icons scale and animate on hover
- **Skill Levels**: Hover to see proficiency percentages
- **Color Coding**: Each technology has its signature color
- **Floating Animation**: Subtle floating animations for visual appeal

### Project Cards
- **Hover Scaling**: Cards scale slightly on hover
- **Image Effects**: Project images zoom on hover
- **Technology Badges**: Display technologies used in each project
- **Direct Links**: Both live demo and GitHub repository links

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Netlify, Vercel, or GitHub Pages

1. Build the project
2. Upload the `dist` folder to your hosting service
3. Configure your domain (if applicable)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers
- Responsive design works on all screen sizes

## Performance

- Optimized images and assets
- Efficient React components
- Tailwind CSS purging removes unused styles
- Vite's fast HMR for development

## Contact

Update the contact information in the components to match your details:
- Email in Hero.jsx and Footer.jsx
- Social media links in Footer.jsx
- GitHub and project URLs in Projects.jsx

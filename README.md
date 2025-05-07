# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing full-stack development and data analysis expertise.

## Features

- 🎨 Theme Switching (Light/Dark mode)
- 📱 Responsive Design
- 📊 Interactive Project Showcase
- 📧 Contact Form with Email Integration
- 📈 Skills and Experience Display
- 📱 Mobile-Friendly Navigation

## Tech Stack

- **Frontend**: React, React Router, Framer Motion
- **Styling**: CSS Modules, Styled Components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Integration**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/personal-portfolio.git
```

2. Install dependencies:
```bash
cd personal-portfolio
npm install
```

3. Configure EmailJS (for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service and template
   - Update the service ID, template ID, and public key in `src/components/ContactForm.js`

4. Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/         # Reusable React components
├── context/           # React context providers
├── assets/            # Static assets
├── styles/            # Global styles and theme
└── App.js             # Main application component
```

## Customization

### Theme Customization

Edit the CSS variables in `src/index.css` to modify the theme colors:
```css
:root {
  --primary-color: #1a73e8;
  --secondary-color: #2196f3;
  --text-color: #333;
  --light-text: #666;
  --background: #fff;
  --section-bg: #f8f9fa;
  --border-color: #e0e0e0;
}
```

### Content Customization

1. Update personal information in `src/components/Home.js`
2. Add or modify projects in `src/components/Projects.js`
3. Update skills in `src/components/Skills.js`
4. Modify the contact form in `src/components/ContactForm.js`

## Deployment

To deploy the website:

1. Build the production version:
```bash
npm run build
```

2. Deploy to your preferred hosting service (e.g., Vercel, Netlify, GitHub Pages)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React Icons for the icon library
- Framer Motion for smooth animations
- EmailJS for email integration

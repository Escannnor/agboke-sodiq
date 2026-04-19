# Personal Portfolio Website

A responsive React portfolio for **Agboke Sodiq** (backend development, AI agents, and blockchain). Built with Create React App, React Router, Framer Motion, and global CSS.

## Contact

- **Email:** [sawdickagboke@gmail.com](mailto:sawdickagboke@gmail.com)
- **Phone:** [+234 905 019 2887](tel:+2349050192887) · [+234 906 320 4448](tel:+2349063204448) · [+234 818 285 2767](tel:+2348182852767)
- **LinkedIn:** [Sodiq Agboke](https://www.linkedin.com/in/sodiq-agboke-397117306/)
- **GitHub:** [Escannnor](https://github.com/Escannnor)

## Features

- Responsive layout and mobile navigation
- Sections for home, about, experience, projects (with GitHub links), skills, resume upload (browser storage), and contact
- Framer Motion for light page animations
- React Icons

## Tech Stack

- **Frontend:** React 18, React Router 6, Framer Motion
- **Styling:** Global CSS (`src/index.css`), with Emotion / MUI / styled-components available in dependencies if you extend the UI

## Getting Started

### Prerequisites

- Node.js 14+ (LTS recommended)
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
```

2. Install dependencies:

```bash
cd agboke-sodiq
npm install
```

3. Start the development server:

```bash
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
```

Output is in the `build/` folder—suitable for **Vercel**, Netlify, or any static host.

## Project structure

```
src/
├── components/     # Pages and UI (Home, About, Experience, Projects, Skills, Resume, Contact, Navbar, Footer)
├── context/        # Optional theme context (ThemeContext)
├── App.js          # Routes
├── index.js
└── index.css       # Global styles and theme variables
```

## Customization

### Theme

Edit CSS variables in `src/index.css` (e.g. `--primary-color`, `--background`).

### Content

- **Summary & hero:** `src/components/Home.js`
- **About & education:** `src/components/About.js`
- **Work history:** `src/components/Experience.js`
- **Projects & GitHub URLs:** `src/components/Projects.js`
- **Skills:** `src/components/Skills.js`
- **Resume (local upload):** `src/components/Resume.js`
- **Contact form:** `src/components/Contact.js` (wire EmailJS or a backend as needed; see also `ContactForm.js` if you use that pattern)

## Deployment (e.g. Vercel)

1. Push this repo to GitHub.
2. Import the project in Vercel; set the framework to **Create React App** (or use the default detection).
3. Build command: `npm run build`, output directory: `build`.

## License

MIT License—see the LICENSE file if present in the repository.

## Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)

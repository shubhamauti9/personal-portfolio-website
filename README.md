<div align="center">

# 🌐 Shubham Auti — Personal Portfolio

**A modern, responsive single-page portfolio website built with React 18 and Vite.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)

[View Live Demo →](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Components Overview](#components-overview)
- [Design System](#design-system)
- [Customisation Guide](#customisation-guide)
- [License](#license)
- [Contact](#contact)

---

## 📌 About the Project

This is a clean, professional portfolio website for **Shubham Auti** — a Software Engineer / Assistant Manager at Mirae Asset Sharekhan with 3+ years of experience in Backend & AI systems. The portfolio showcases professional experience, education, technical skills, projects, and research publications in an elegant, single-page layout.

The site is designed with a **"cards-within-cards"** aesthetic on a minimal off-white background, using typewriter-style typography (`Special Elite` & `Courier Prime`) to create a distinctive, professional feel.

---

## ✨ Features

| Category | Details |
|---|---|
| **Responsive Design** | Fully responsive layout optimised for desktop, tablet, and mobile viewports |
| **Smooth Scroll Navigation** | Sticky navbar with active-section highlighting and smooth anchor scrolling |
| **Scroll Animations** | Custom `useFadeIn` hook powered by the Intersection Observer API for scroll-triggered fade-in effects |
| **Hero Section** | Profile photo, tagline, social links (GitHub, LinkedIn, Email), resume view & download |
| **Email Modal** | Interactive modal dialog for displaying contact email (no external services required) |
| **Resume Integration** | In-browser PDF viewing and one-click download of the resume |
| **Timeline Layout** | Vertical timeline design for Education and Experience sections |
| **Skills Grid** | Categorised skill tags grouped by Programming Languages, Databases, and Tools |
| **Project Showcase** | Card-based project grid with tech stack tags and links to source code / live demos |
| **Research Publications** | Publication cards with abstracts, view and download options for full papers |
| **SEO Optimised** | Proper meta tags, semantic HTML5 elements, and descriptive title |
| **Vercel Deployment** | Pre-configured `vercel.json` with SPA rewrites for seamless deployment |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **UI Library** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Styling** | Vanilla CSS with CSS custom properties (design tokens) |
| **Typography** | Google Fonts — `Special Elite`, `Courier Prime` |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Language** | JavaScript (ES Modules) |
| **License** | Apache 2.0 |

---

## 📁 Project Structure

```
personal-portfolio/
├── assets/                         # Static assets (profile photo, resume, papers)
│   ├── shubham.auti.jpeg           # Profile picture
│   ├── shubham.auti.resume.pdf     # Resume / CV
│   └── *.pdf                       # Research publication PDFs
├── src/
│   ├── components/                 # React components (one folder per section)
│   │   ├── Navbar/                 # Sticky navigation bar
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/                   # Landing / hero section
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── About/                  # About me section
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Education/              # Education timeline
│   │   │   ├── Education.jsx
│   │   │   └── Education.css
│   │   ├── Experience/             # Work experience timeline
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Skills/                 # Technical skills grid
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.css
│   │   ├── Projects/               # Project showcase cards
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Publications/           # Research publications
│   │   │   ├── Publications.jsx
│   │   │   └── Publications.css
│   │   └── Footer/                 # Footer with contact links
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── hooks/
│   │   └── useFadeIn.js            # Custom hook for scroll-triggered fade-in
│   ├── App.jsx                     # Root component — assembles all sections
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles, design tokens & utilities
├── index.html                      # HTML shell with SEO meta tags
├── vite.config.js                  # Vite configuration with React plugin
├── vercel.json                     # Vercel SPA rewrite rules
├── package.json                    # Dependencies & scripts
├── .gitignore                      # Git ignore rules
├── LICENSE                         # Apache 2.0 license
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **npm** ≥ 9.x (bundled with Node.js) — or **yarn** / **pnpm** as alternatives
- **Git** — [Download](https://git-scm.com/)

Verify your installation:

```bash
node --version    # Should print v18.x.x or higher
npm --version     # Should print 9.x.x or higher
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shubhamauti9/personal-portfolio-website.git
   cd personal-portfolio-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server with hot module replacement (HMR):

```bash
npm run dev
```

The app will be available at **`http://localhost:5173`** (default Vite port). The server supports instant hot-reload — any changes to `.jsx` or `.css` files will be reflected immediately in the browser.

### Building for Production

Generate an optimised production build in the `dist/` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ☁️ Deployment

This project is **pre-configured for Vercel**. The `vercel.json` file includes SPA rewrite rules so that all routes serve `index.html`.

### Deploy to Vercel

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and import the repository.
3. Vercel auto-detects the Vite framework — no additional configuration needed.
4. Click **Deploy** and your site will be live.

### Alternative Platforms

Since this is a static site, you can deploy to any platform that serves static files:

| Platform | Command / Method |
|---|---|
| **Netlify** | Drag & drop the `dist/` folder, or connect your GitHub repo |
| **GitHub Pages** | Use `gh-pages` package or GitHub Actions to deploy `dist/` |
| **Firebase Hosting** | `firebase deploy` after initialising with `firebase init hosting` |
| **AWS S3 + CloudFront** | Upload `dist/` contents to an S3 bucket with static website hosting enabled |

---

## 🧩 Components Overview

Each section of the portfolio is an independent, self-contained React component with its own `.jsx` and `.css` files.

| Component | Description | Key Features |
|---|---|---|
| **`Navbar`** | Sticky top navigation | Scroll shadow, active section tracking, mobile hamburger toggle |
| **`Hero`** | Landing section | Profile photo, social icons (SVG), resume view/download, email modal |
| **`About`** | Bio and personal info | Location, email, interests displayed as detail items |
| **`Education`** | Academic background | Vertical timeline with animated cards (M.Tech, B.E., HSC, SSC) |
| **`Experience`** | Work history | Vertical timeline — roles at Mirae Asset Sharekhan and JNPT |
| **`Skills`** | Technical proficiencies | Categorised tag grid (Languages, Databases, Tools) |
| **`Projects`** | Project showcase | Card grid with tech stack tags, code & demo links |
| **`Publications`** | Research papers | Publication cards with abstracts, view & download PDF |
| **`Footer`** | Contact & copyright | Social links, email modal, copyright notice |

### Custom Hook: `useFadeIn`

A reusable hook that leverages the **Intersection Observer API** to trigger CSS fade-in animations when elements scroll into the viewport.

```jsx
import useFadeIn from './hooks/useFadeIn'

function MyComponent() {
  const ref = useFadeIn()           // default threshold: 0.15
  return <div ref={ref} className="fade-in">Content</div>
}
```

---

## 🎨 Design System

The project uses a **CSS custom properties (design tokens)** approach defined in `src/index.css`:

### Colour Palette

| Token | Value | Usage |
|---|---|---|
| `--white` | `#ffffff` | Card backgrounds |
| `--off-white` | `#f8f8f8` | Page background, inner cards |
| `--light-gray` | `#f0f0f0` | Borders, hover states |
| `--mid-gray` | `#d0d0d0` | Dividers, social link borders |
| `--text` | `#2c2c2c` | Primary text colour |
| `--text-light` | `#6b6b6b` | Secondary / muted text |
| `--accent` | `#3a3a3a` | Links, emphasis |

### Typography

- **Headings** — `Special Elite` (cursive, typewriter aesthetic)
- **Body** — `Courier Prime` (monospace, clean readability)

### Shared Classes

| Class | Purpose |
|---|---|
| `.section` | Standard section padding (100px vertical) |
| `.container` | Centred content wrapper (max-width 1100px) |
| `.card` | Outer card with white background, border, shadow, hover lift |
| `.inner-card` | Nested card with off-white background |
| `.btn-primary` | Solid dark button |
| `.btn-secondary` | Outlined button |
| `.social-link` | Circular social icon button |
| `.fade-in` | Scroll-triggered fade-in animation (paired with `useFadeIn`) |

---

## 🔧 Customisation Guide

### Updating Personal Information

| What | Where |
|---|---|
| Name, title, tagline | `src/components/Hero/Hero.jsx` |
| Bio, location, email | `src/components/About/About.jsx` |
| Education entries | `src/components/Education/Education.jsx` → `educationData` array |
| Work experience | `src/components/Experience/Experience.jsx` → `experienceData` array |
| Skills | `src/components/Skills/Skills.jsx` → `skillsData` array |
| Projects | `src/components/Projects/Projects.jsx` → `projectsData` array |
| Publications | `src/components/Publications/Publications.jsx` → `publicationsData` array |
| Social links | `src/components/Hero/Hero.jsx` and `src/components/Footer/Footer.jsx` |

### Replacing Assets

| Asset | Location |
|---|---|
| Profile photo | `assets/shubham.auti.jpeg` — replace with your own image |
| Resume PDF | `assets/shubham.auti.resume.pdf` — replace and update the import in `Hero.jsx` |
| Publication PDFs | `assets/*.pdf` — replace and update imports in `Publications.jsx` |

### Modifying the Design

- **Colours** — Update CSS custom properties in `src/index.css` under `:root`
- **Typography** — Change the Google Fonts `<link>` in `index.html` and update `font-family` in `index.css`
- **Spacing & Layout** — Adjust padding, max-width, and border-radius via the design tokens

### Adding a New Section

1. Create a new folder under `src/components/` (e.g., `Certifications/`)
2. Add `Certifications.jsx` and `Certifications.css`
3. Import and add `<Certifications />` in `src/App.jsx`
4. Add a corresponding nav link in `Navbar.jsx` → `navItems` array

---

## 📜 License

Distributed under the **Apache License 2.0**. See [`LICENSE`](./LICENSE) for full details.

---

## 📬 Contact

**Shubham Auti**

- 📧 Email: [shubham.auti1999@gmail.com](mailto:shubham.auti1999@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/shubhamauti9](https://www.linkedin.com/in/shubhamauti9/)
- 🐙 GitHub: [github.com/shubhamauti9](https://github.com/shubhamauti9)

---

<div align="center">

**⭐ If you found this helpful, consider giving the repository a star!**

</div>
## 🚀 Business Advice — React + Vite

Modern, responsive business advisory website built with React, Vite, Tailwind CSS v4, and Framer Motion. It features landing variants, services, pricing, portfolio, blog, and contact pages with smooth animations and a clean UI.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1-646cff?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4.x-38bdf8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-ASK--OWNER-lightgrey)

### 🌐 Live Demo

[`https://jix-business-advice.netlify.app/`](https://jix-business-advice.netlify.app/)

### ✨ Features

- **Responsive multi-page marketing site**: Home, About, Services, Pricing, Portfolio, Blog, Contact, Landing variants
- **Smooth animations** with Framer Motion
- **Utility-first styling** powered by Tailwind CSS v4
- **Blog** listing and detail pages with comments UI
- **Reusable components**: headers, footers, price cards, team sections, etc.
- **Production-ready** build via Vite and Netlify SPA redirects

### 🧰 Tech Stack

- React 19 + Vite (Rolldown)
- Tailwind CSS v4
- Framer Motion
- React Router v7
- React Icons
- ESLint 9

### 🗂️ Project Structure

```
business-advice/
├─ public/                 # Static assets (served as-is)
├─ src/
│  ├─ assets/              # Images and media
│  ├─ Components/          # Reusable UI components
│  ├─ Layouts/             # Layout wrappers
│  ├─ Pages/               # Route pages (Home, About, Blog, etc.)
│  ├─ data/                # Static data (e.g., blogData.js)
│  ├─ App.jsx              # App shell
│  └─ main.jsx             # Entry point
├─ dist/                   # Production build output
├─ index.html              # App HTML template
├─ vite.config.js          # Vite configuration
└─ eslint.config.js        # ESLint config
```

### ⚙️ Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### 🔧 Available Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build (outputs to `dist/`)
- `npm run preview`: Preview the built app locally
- `npm run lint`: Run ESLint

### 🚀 Routing & Deployment

- Client-side routing is handled by React Router v7.
- A Netlify `_redirects` file is included under `public/` to support SPA routes in production.
  - Example entry: `/* /index.html 200`
- The site is deployed to Netlify at [`https://jix-business-advice.netlify.app/`](https://jix-business-advice.netlify.app/).

### 🎨 Customization

- Update brand assets under `src/assets/` (e.g., `Logo.png`).
- Adjust theme/styles via Tailwind classes in components and `src/index.css`.
- Edit content within `src/Pages/` and `src/Components/`.
- Blog entries can be updated in `src/data/blogData.js`.

### 🤝 Contributing

Pull requests are welcome. For significant changes, please open an issue to discuss what you would like to change.

### 📄 License

This project is provided as-is. If you need a specific license, add one (e.g., MIT) at the repository root and update this section accordingly.

---

🔗 Deployed site: [`https://jix-business-advice.netlify.app/`](https://jix-business-advice.netlify.app/)

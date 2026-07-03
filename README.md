# Anya Furniture — Vite + React + Tailwind

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown by Vite (usually `http://localhost:5174`).

## Build

Build production assets:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Notes

- Images are stored in `public/img` and referenced from components as `/img/...`.
- Product data lives in `src/data/products.js`.
- Tailwind is configured in `tailwind.config.js` and global styles are in `src/index.css`.
- Main application entry: `src/main.jsx`.
- Primary app component: `src/App.jsx`.

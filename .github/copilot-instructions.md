# Copilot Instructions for Recipe-Finder Website

## Project Overview
- **Type:** React single-page app using [Vite](https://vitejs.dev/) for fast development and builds.
- **Location:** Main app code is in `Recipe-Finder/`.
- **Purpose:** Recipe discovery and presentation, with a focus on clean UI and fast search.

## Key Structure
- `src/` — All React components, CSS, and assets.
  - Major UI sections: `Header.jsx`, `HeroSection.jsx`, `FeaturesSection.jsx`, `RealLifeSection.jsx`.
  - Styles: Each component has a matching `.css` file.
  - Assets: Fonts in `assets/fonts/`, images in `assets/images/`.
- `public/` — Static files (e.g., `vite.svg`).
- `index.html` — Vite entry point.

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start dev server (with HMR):**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Lint:**
  ```sh
  npm run lint
  ```

## Patterns & Conventions
- **Component structure:** Each major UI section is a self-contained React component with its own CSS.
- **No global state management** (as of current codebase) — data flows via props.
- **Assets:** Use relative imports from `src/assets/` for images and fonts.
- **Styling:** Prefer CSS modules per component; avoid global styles except for `index.css`.
- **No backend/API integration** is present in this repo.

## External Integrations
- Uses Vite plugins for React (`@vitejs/plugin-react` or `@vitejs/plugin-react-swc`).
- Fonts are locally hosted in `assets/fonts/`.

## Examples
- To add a new section: create `NewSection.jsx` and `NewSection.css` in `src/`, import and use in `App.jsx`.
- To add an image: place in `src/assets/images/`, import in your component.

## References
- See `Recipe-Finder/README.md` for Vite/React details.
- See `src/` for component patterns.

---

**Edit this file to update project-specific AI agent instructions.**

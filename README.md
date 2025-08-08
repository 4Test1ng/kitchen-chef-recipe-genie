# KitchenChef – AI-Assisted Recipe Builder

A React + Vite + Tailwind app that generates cooking-ready recipes from your ingredients. It’s 100% client-side, so it can be deployed to any static host.

## Is it ready for deployment?
Yes. This is a static Vite app with no backend required. Data is stored locally in the browser. You can publish it right now using Lovable’s built-in Publish, or deploy to Vercel/Netlify/GitHub Pages.

---

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS (with a design system + shadcn/ui)

---

## Local Development

Prerequisites:
- Node.js 18+ and npm

Steps:

```bash
# 1) Clone the repository
git clone <YOUR_REPO_URL>
cd <YOUR_PROJECT_FOLDER>

# 2) Install dependencies
npm install

# 3) Start the development server (Vite)
npm run dev
```

By default, the app serves at:
- http://localhost:8080 (configured in vite.config.ts)

Stop with Ctrl+C.

---

## Build & Preview Production

```bash
# Build for production (output in /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## Deployment Options

### 1) Lovable Publish (Recommended for fastest publish)
- Open your project in Lovable → Share → Publish.
- Optionally connect a custom domain in Project → Settings → Domains.

### 2) Vercel
1. Push your code to GitHub.
2. In Vercel, “Add New Project” → Import your repo.
3. Framework preset: Vite.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

### 3) Netlify
1. Push your code to GitHub.
2. In Netlify, “Add new site” → “Import an existing project”.
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Deploy.

### 4) GitHub Pages
1. Build locally: `npm run build` (creates `dist`).
2. Deploy `dist` with any GH Pages workflow (e.g., `peaceiris/actions-gh-pages`) or Netlify/Vercel via repo.
3. If deploying to a subpath (username.github.io/repo), set Vite `base` accordingly.

---

## Environment & APIs
- The app runs fully client-side with localStorage for persistence.
- No backend or environment variables are required for core functionality.
- If you later integrate external AI or a database, follow your provider’s recommended client-side setup and security model.

---

## Project Scripts
- `npm run dev` – Start local dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production locally

---

## Common Issues & Fixes
- Blank page after deploy:
  - Ensure the correct Output Directory is `dist` and the build command is `npm run build`.
  - If hosted at a subpath, configure Vite `base` and redeploy.
- Styling issues:
  - Verify Tailwind is building. Re-run `npm run build` and check the output.
- Route not found (404 on refresh):
  - Enable SPA fallback on your host (Vercel/Netlify do this by default).

---

## Contributing
- Use feature branches and Pull Requests.
- Keep components small, accessible, and aligned with the design system tokens.

## License
- MIT (or your preferred license)

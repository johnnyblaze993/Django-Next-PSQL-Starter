# 🌠 Frontend – Astronomy Data Explorer

This is the **Next.js** (React + TypeScript) frontend for the Astronomy Data Explorer.  
It provides a beautiful, responsive UI to browse and visualize galaxies, stars, planets, and black holes from the API.

---

## 🚀 Quick Start (Development)

1. **Install dependencies (locally, outside Docker, for code completion):**

    ```sh
    npm install
    ```

2. **Start the frontend (in Docker Compose):**
    - The frontend will run on [http://localhost:3000](http://localhost:3000) as part of the full stack (`docker compose up --build -d`).

3. **Live development:**
    - For instant hot reloading, use VSCode’s **Remote Explorer** to attach directly to the running `frontend` container.

---

## 📁 Important Files & Folders

- `src/pages/`  
  Next.js app routes (each file = route).
- `src/features/`  
  React hooks and API logic for each entity (galaxies, stars, etc).
- `src/components/`  
  Reusable UI components (cards, buttons, loading spinners, etc).
- `src/styles/`  
  All CSS files for global, layout, and component styling.

---

## 🛠️ Useful Scripts

- `npm run dev` — Start the Next.js dev server (useful for local dev outside Docker).
- `npm run build` — Create a production build.
- `npm run lint` — Run code linting checks.

---

## 💡 Workflow Tips

- All API requests are routed to the backend at `/api/...`.
- Change the theme or UI in `src/styles/`.
- To add a new data page (e.g., "Nebulas"):
    1. Create a new API hook in `src/features/nebulas/useNebulas.ts`.
    2. Add a page in `src/pages/nebulas.tsx`.
    3. Use the existing grid and card UI patterns for consistency.
- Use `npm install <package>` inside the Dev Container for new dependencies.

---

## 🧑‍🚀 Pro Tip

For **best results**, always develop inside the Docker Dev Container for instant hot reloading and a production-matching environment.

---

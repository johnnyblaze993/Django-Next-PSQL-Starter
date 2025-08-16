# 🌱 Frontend – Plant Store

This is the **Next.js** (React + TypeScript) frontend for the Plant Store demo.
It provides a responsive UI to browse plants and read care tips from the API.

---

## 🚀 Quick Start (Development)

1. **Install dependencies (locally, outside Docker, for code completion):**
   ```sh
   npm install
   ```
2. **Start the frontend (in Docker Compose):**
   - Runs on [http://localhost:3000](http://localhost:3000) as part of the full stack.
3. **Live development:**
   - Use VSCode’s Remote Explorer to attach to the running `frontend` container for hot reloading.

---

## 📁 Important Files & Folders

- `src/app/` – Next.js app routes
- `src/features/` – React hooks and API logic
- `src/components/` – Reusable UI components

---

## 🛠️ Useful Scripts

- `npm run dev` — Start the Next.js dev server
- `npm run build` — Create a production build
- `npm run lint` — Run code linting checks

---

## 💡 Workflow Tips

- All API requests are routed to the backend at `/api/...`.
- To add a new data page (e.g., "Accessories"):
  1. Create an API hook in `src/features/accessories/useAccessories.ts`.
  2. Add a page in `src/app/accessories/page.tsx`.
  3. Use the existing grid and card UI patterns for consistency.

---

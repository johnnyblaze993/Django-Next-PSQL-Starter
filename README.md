# Plant Store Demo

A full-stack demo for browsing houseplants, accessories, and care tips—powered by **Django**, **PostgreSQL**, and **Next.js**.

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```sh
   git clone https://github.com/johnnyblaze993/plant-store.git
   cd plant-store
   ```
2. **Ensure backend wait script is executable:**
   ```sh
   chmod u+x ./backend/wait-for-it.sh
   ```
3. **Start the stack in detached mode:**
   ```sh
   docker compose up --build -d
   ```
   - Builds all Docker images and starts the database, backend, and frontend in the background.
   - Applies Django migrations and seeds the database with plant data automatically.
4. **Open your project in a Dev Container** for live code editing and hot reloading.
5. **Stop all containers:**
   ```sh
   docker compose down
   ```

---

## 🔄 Typical Development Flow

1. Start the stack:
   ```sh
   docker compose up --build -d
   ```
2. Use VSCode Remote Explorer to attach to containers and edit code with hot reloading.
3. When done:
   ```sh
   docker compose down
   ```

---

## 🛠️ Dependency or Dockerfile Updates

- If you add new Python/Node packages or change Dockerfiles, rerun:
  ```sh
  docker compose up --build -d
  ```
- The database will be seeded with plant data on first run or any time the DB is reset.

---

## ❓ FAQ & Troubleshooting

- **Do I need Python, Node, or Postgres installed locally?** No—Docker handles everything.
- **Do I need to run migrations or seed data manually?** No—done automatically at startup.
- **How do I reset the database?**
  ```sh
  docker compose down -v
  docker compose up --build -d
  ```

---

## 📝 Project Structure

- **/backend/**: Django app and management commands for the API
- **/frontend/**: Next.js frontend application
- **docker-compose.yml**: Orchestrates backend, frontend, and database
- **Database**: PostgreSQL with auto-seeded plant data

---

## 🌿 Explore the API

Once running, check these endpoints:
- http://localhost:8000/api/categories/
- http://localhost:8000/api/plants/
- http://localhost:8000/api/accessories/
- http://localhost:8000/api/care-tips/

---

## 💡 Contribution Tips

- Run `npm install` in `/frontend` locally if you want editor type checking.
- Use VSCode Dev Containers for a fully containerized and integrated development experience.

---

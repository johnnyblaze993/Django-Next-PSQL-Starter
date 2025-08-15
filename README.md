# Astronomy Data Explorer

A professional full-stack demo app for exploring galaxies, stars, planets, and black holes—powered by Django, Postgres, and Next.js.

---

## 🚀 Quick Start

1. **Clone the repository:**

    ```sh
    git clone https://github.com/johnnyblaze993/galaxyApp.git
    cd galaxyApp
    ```

2. **Ensure backend wait script is executable:**  
   (This allows the backend to wait for the database before starting.)

    ```sh
    chmod u+x ./backend/wait-for-it.sh
    ```

3. **Start the stack in detached mode (builds images and seeds the database):**

    ```sh
    docker compose up --build -d
    ```

    - Builds all Docker images and starts the database, backend, and frontend in the background.
    - Applies Django migrations and seeds the database with astronomy data automatically.
    - **You’ll get your terminal back right away.**

4. **Open your project in a Dev Container (for live code editing and hot reloading):**

    - Open **VSCode**.
    - Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`).
    - Type and select **“Remote Explorer: Focus on Containers”**.
    - After running `docker compose up --build -d`, you’ll see your running containers in the **Remote Explorer** panel.
    - **Right-click** on the `frontend` or `backend` container and select **“Attach to Container”** or **“Open in Container”**.
    - Once inside the Dev Container, any code changes you make (in frontend or backend) will reflect **live** in your running app—no need for `docker compose watch`!

5. **Stop all containers:**

    ```sh
    docker compose down
    ```

    - Shuts down all containers and the network.

---

## 🔄 Typical Development Flow

1. Start the stack (in detached/background mode):

    ```sh
    docker compose up --build -d
    ```

2. In VSCode, use the **Remote Explorer** sidebar to open and edit code directly inside your running containers for hot reloading and instant feedback.

3. When done, stop everything:

    ```sh
    docker compose down
    ```

---

## 🛠️ Dependency or Dockerfile Updates

- **If you add new Python/Node packages or change Dockerfile(s), always re-run:**

    ```sh
    docker compose up --build -d
    ```

- The database will be seeded with astronomy data on first run or any time the DB is reset (by removing the volume).

---

## ❓ FAQ & Troubleshooting

- **Do I need Python, Node, or Postgres installed locally?**  
  _No!_ Docker handles everything for you.

- **Do I need to run migrations or seed data manually?**  
  _No!_ The backend service does this automatically at startup.

- **How do I reset the database (delete all data and start fresh)?**

    ```sh
    docker compose down -v
    docker compose up --build -d
    ```

- **How do I see my changes reflected instantly in the frontend?**  
  Open your code in the frontend (or backend) Dev Container using VSCode’s **Remote Explorer**. Edit your code there for live reloading.

- **Do I have to restart everything after every change?**  
  _No._ Only if you change dependencies or Dockerfiles. Otherwise, just edit your code in the container for live updates.

---

## 📝 Project Structure

- **/backend/**: Django app and management commands for data/API
- **/frontend/**: Next.js frontend application (with hot reloading support)
- **docker-compose.yml**: Orchestrates backend, frontend, and database
- **Database**: PostgreSQL with auto-seeded astronomy data

---

## 🌌 Explore the API

Once the stack is running, check these endpoints:

- [http://localhost:8000/api/galaxies/](http://localhost:8000/api/galaxies/)
- [http://localhost:8000/api/stars/](http://localhost:8000/api/stars/)
- [http://localhost:8000/api/planets/](http://localhost:8000/api/planets/)
- [http://localhost:8000/api/blackholes/](http://localhost:8000/api/blackholes/)

---

## 💡 Contribution Tips

- Run `npm install` in `/frontend` locally if you want code completion and TypeScript type checking in your editor (VSCode, etc.).
- Use **VSCode Dev Containers** (with Docker) for a fully containerized and integrated development experience.

---

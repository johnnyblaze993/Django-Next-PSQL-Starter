# 🌌 Backend – Astronomy Data Explorer API

This is the **Django REST API** powering the Astronomy Data Explorer app.  
It manages galaxies, stars, planets, and black holes—served from a PostgreSQL database.

---

## 🚀 Quick Start (Development)

1. **Ensure dependencies are installed:**
    - The backend is built with Docker (`docker compose up --build -d`) and does **not require Python installed locally**.
    - If developing locally outside Docker, create a virtualenv and run:

        ```sh
        pip install -r requirements.txt
        ```

2. **Ensure the wait script is executable** (required for Compose to start up in sync with the DB):

    ```sh
    chmod u+x ./wait-for-it.sh
    ```

3. **Start the backend (with the full stack):**
    - The backend will be available at [http://localhost:8000](http://localhost:8000).

4. **Run management commands:**
    - To seed the DB (Docker handles this on up):  

      ```sh
      docker compose exec backend python manage.py seed_backend
      ```

    - To run migrations manually:  

      ```sh
      docker compose exec backend python manage.py migrate
      ```

---

## 📁 Important Files & Folders

- `backend/models.py`
  All Django models: Galaxy, Star, Planet, BlackHole (uses UUID).
- `backend/views.py`
  API ViewSets for each resource (CRUD logic).
- `backend/serializers.py`
  DRF serializers for JSON API.
- `backend/management/commands/seed_backend.py`
  Seeds astronomy data (galaxies, stars, etc.) for demonstration/testing.
- `config/urls.py`  
  Root API route registration.
- `wait-for-it.sh`  
  Ensures backend waits for the DB before starting.

---

## 💡 Workflow Tips

- Any time you change models, run migrations:

    ```sh
    docker compose exec backend python manage.py makemigrations
    docker compose exec backend python manage.py migrate
    ```

- You can create more seeders by adding new commands in `management/commands/`.
- Access the Django admin at [http://localhost:8000/admin/](http://localhost:8000/admin/) (create a superuser if needed).

---

## 🌌 API Endpoints

- `/api/galaxies/`
- `/api/stars/`
- `/api/planets/`
- `/api/blackholes/`

---

## 🧑‍🚀 Pro Tip

**Develop inside the Docker container for perfect dependency matching.**  
If you need to debug, attach to the backend container and use Django’s management commands.

---

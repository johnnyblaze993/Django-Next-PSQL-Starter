# 🌿 Backend – Plant Store API

This is the **Django REST API** powering the Plant Store demo.
It manages plants, categories, accessories, and care tips served from a PostgreSQL database.

---

## 🚀 Quick Start (Development)

1. **Ensure dependencies are installed:**
   - The backend runs in Docker and does not require Python installed locally.
   - If developing outside Docker, create a virtualenv and run:
     ```sh
     pip install -r requirements.txt
     ```
2. **Ensure the wait script is executable:**
   ```sh
   chmod u+x ./wait-for-it.sh
   ```
3. **Start the backend (with the full stack):**
   - Available at [http://localhost:8000](http://localhost:8000).
4. **Run management commands:**
   ```sh
   docker compose exec backend python manage.py seed_backend
   docker compose exec backend python manage.py migrate
   ```

---

## 📁 Important Files & Folders

- `backend/models.py` – Django models: Category, Plant, Accessory, CareTip
- `backend/views.py` – API ViewSets for each resource
- `backend/serializers.py` – DRF serializers for JSON API
- `backend/management/commands/seed_backend.py` – Seeds plant data for demonstration/testing
- `config/urls.py` – Root API route registration
- `wait-for-it.sh` – Ensures backend waits for the DB before starting

---

## 🌿 API Endpoints

- `/api/categories/`
- `/api/plants/`
- `/api/accessories/`
- `/api/care-tips/`

---

## 💡 Workflow Tips

- After changing models, run migrations:
  ```sh
  docker compose exec backend python manage.py makemigrations
  docker compose exec backend python manage.py migrate
  ```
- Access the Django admin at [http://localhost:8000/admin/](http://localhost:8000/admin/)

---

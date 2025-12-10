# Running PostgreSQL in Docker

This document explains the benefits of running PostgreSQL inside Docker, how volumes help keep data safe, and how to connect to a running database container.

---

## 1. What are the benefits of running PostgreSQL in a Docker container?

1. **Easy setup**  
   You don’t need to install PostgreSQL on your machine. Docker handles everything.

2. **Consistent environment**  
   Every teammate runs the same PostgreSQL version with the same configuration.

3. **Clean and isolated**  
   The database runs in its own container, separate from your system.  
   No risk of breaking other apps on your computer.

4. **Simple to start, stop, or reset**  
   Using `docker compose up` or `docker compose down` is faster than reinstalling a database manually.

5. **Good for testing**  
   You can spin up fresh database instances quickly for development, integration testing, or CI.

---

## 2. How do Docker volumes help persist PostgreSQL data?

PostgreSQL containers are temporary.  
If the container stops or is rebuilt, **data inside the container would normally be deleted**.

Volumes solve this problem.

### Benefits of volumes:

1. **Data is stored outside the container**  
   The volume keeps your databases safe even if the container is destroyed.

2. **Automatic attachment**  
   Docker mounts the volume every time the PostgreSQL container starts.

3. **Safe local development**  
   You can rebuild images or upgrade PostgreSQL without losing data.

### Example docker-compose.yml volume:

```yaml
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: focusbear
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

The folder `/var/lib/postgresql/data` is where PostgreSQL stores its data.  
The `postgres_data` volume keeps everything safe between restarts.

---

## 3. How can you connect to a running PostgreSQL container?

There are several ways.

---

### **Option A — Using psql inside the container**

```bash
docker exec -it postgres_container psql -U dev -d focusbear
```

This opens the PostgreSQL shell.

---

### **Option B — Using a local GUI client (pgAdmin, TablePlus, DBeaver)**

Use these settings:

- **Host:** `localhost`
- **Port:** `5432`
- **User:** `dev`
- **Password:** `dev`
- **Database:** `focusbear`

If you're using Docker Compose, PostgreSQL will be accessible on your computer through port 5432 unless changed.

---

### **Option C — Using psql on your host machine**

If you have psql installed:

```bash
psql "postgres://dev:dev@localhost:5432/focusbear"
```

---

## Summary

Running PostgreSQL in Docker makes development easier and more consistent.  
Volumes protect your data, and connecting to the database is simple with `psql` or a GUI client.  
This setup is reliable and matches how many backend teams work in real projects.

---

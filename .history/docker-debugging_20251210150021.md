# Docker Debugging & Management

This document explains how to inspect, debug, and manage Docker containers while developing a backend service.

---

## 1. How can you check logs from a running container?

You can view logs with:

```bash
docker logs <container_name>
```

This helps you see errors, startup messages, or print statements.  
If the container is crashing, logs usually tell you why.  
Adding `-f` lets you follow logs in real time:

```bash
docker logs -f <container_name>
```

---

## 2. What is the difference between `docker exec` and `docker attach`?

### `docker exec`

- Opens a **new shell session** inside the container
- Safe to use
- Does _not_ affect the main process
- Common example:

```bash
docker exec -it <container_name> bash
```

### `docker attach`

- Connects directly to the container's **main running process**
- If you close it incorrectly, you can stop the app
- Much riskier for development

### Summary:

- **Use `docker exec`** for debugging.
- **Avoid `docker attach`** unless you understand process management.

---

## 3. How do you restart a container without losing data?

If your data is stored in **volumes** (recommended), restarting the container does not affect your data.

Restart:

```bash
docker restart <container_name>
```

If you need to rebuild the service:

```bash
docker-compose down
docker-compose up --build
```

Data stored in volumes remains safe.  
You only lose data if the project uses _container-only storage_ and no volume is attached.

---

## 4. How can you troubleshoot database connection issues inside a containerized NestJS app?

Here are simple steps:

### 4.1 Check logs

Most NestJS database issues show in logs:

```bash
docker logs <nest_container>
```

Common problems:

- Wrong host (should use container name, not `localhost`)
- Wrong port mapping
- Missing environment variables

### 4.2 Enter the running container

You can verify environment variables and files:

```bash
docker exec -it <nest_container> bash
```

Inside the shell:

```bash
echo $DATABASE_URL
```

### 4.3 Confirm the database container is healthy

Run:

```bash
docker ps
docker logs <db_container>
```

### 4.4 Test manual connection to the database

For Postgres:

```bash
docker exec -it <db_container> psql -U postgres
```

If connection succeeds, the problem is in your app config.  
If it fails, the issue is with the DB container setup.

### 4.5 Check Docker network

Containers must be in the same network:

```bash
docker network ls
docker network inspect <network_name>
```

If NestJS cannot “see” the database container, it cannot connect.

---

## Summary

Debugging Docker involves checking logs, entering containers safely, restarting services, and verifying networks.  
These skills help diagnose backend issues quickly during development.

---

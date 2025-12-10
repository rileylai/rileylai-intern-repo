# Setting Up Docker and Docker Compose

This document explains what Docker and Docker Compose do, how they are different, and how they help manage local development more efficiently.

---

## 1. What is the difference between `docker run` and `docker-compose up`?

### `docker run`

- Runs **one container** at a time.
- You must manually type environment variables, ports, volume mounts, etc.
- Good for quick testing but not ideal for larger projects.

Example:

```bash
docker run -p 5432:5432 -e POSTGRES_USER=dev postgres
```

### `docker-compose up`

- Starts **multiple services** together (e.g., Postgres + Redis + API).
- Uses a `docker-compose.yml` file that stores all settings.
- Easier to manage as a group and much cleaner than long commands.

Example:

```bash
docker compose up
```

### Summary:

`docker run` → good for single containers  
`docker-compose up` → best for real projects with many services

---

## 2. How does Docker Compose help when working with multiple services?

1. **Central configuration**
   All service settings (ports, env vars, volumes) are in one YAML file.

2. **Start/stop everything at once**
   One command starts your whole backend stack.

3. **Makes onboarding easy**
   New developers only need one command instead of many manual steps.

4. **Services can depend on each other**
   Example: NestJS API waits for PostgreSQL to be ready.

5. **Consistent across all machines**
   No more “it works on my machine” problems.

---

## 3. What commands can you use to check logs from a running container?

### View logs for all services

```bash
docker compose logs
```

### View logs for one service

```bash
docker compose logs postgres
```

### Follow logs in real time

```bash
docker compose logs -f api
```

### Using docker (single container)

```bash
docker logs <container_id>
docker logs -f <container_id>
```

Logs are important because they show errors, connection failures, startup problems, etc.

---

## 4. What happens when you restart a container? Does data persist?

### Without volumes

Data **does not persist**.  
When the container is removed, everything inside is deleted.

### With volumes

Data **persists safely** because it is stored outside the container.

Example from docker-compose:

```yaml
volumes:
  - postgres_data:/var/lib/postgresql/data
```

This means:

- You can restart containers freely
- Data stays the same
- Local development is stable and safe

Restart example:

```bash
docker compose restart postgres
```

The database restarts, but your tables and records are still there.

---

## Summary

Docker provides isolated environments for services, and Docker Compose makes multi-service projects simple to run and maintain. Logs help diagnose issues quickly, and volumes ensure that important data is not lost across container restarts.

---

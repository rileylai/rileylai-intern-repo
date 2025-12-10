# Using Docker for NestJS Development

This document explains how a Dockerfile defines a containerized NestJS application, why multi-stage builds matter, how Docker Compose helps run multiple services, and how to debug a running NestJS container.

---

## 1. How does a Dockerfile define a containerized NestJS application?

A Dockerfile tells Docker how to build the environment for a NestJS app.

### Key steps usually inside a Dockerfile:

1. **Choose a base image**  
   Example: `node:18-alpine` gives a clean Node.js environment.

2. **Copy the project files**  
   The source code is copied into the container.

3. **Install dependencies**  
   Running `npm install` ensures the container has everything it needs.

4. **Build the NestJS project**  
   Commands like `npm run build` produce the compiled `dist/` folder.

5. **Expose a port**  
   For example: `EXPOSE 3000` lets the API accept requests.

6. **Run the app**  
   Usually: `npm run start:prod`.

### Summary

The Dockerfile acts like a recipe that defines the runtime environment for NestJS.  
Anyone building the image gets the exact same setup.

---

## 2. What is the purpose of a multi-stage build in Docker?

Multi-stage builds help reduce the final image size and make builds cleaner.

### Why multi-stage builds are helpful:

1. **Smaller final image**  
   The development tools (TypeScript compiler, build dependencies, etc.) stay in the first stage only.

2. **Better security**  
   The production image contains fewer tools, reducing attack surface.

3. **Faster deployments**  
   Smaller images upload and download faster.

4. **Cleaner structure**  
   One stage builds the app, another stage only runs the output.

### Summary

Multi-stage builds allow you to build heavy steps once, but ship only the minimal runtime.

---

## 3. How does Docker Compose simplify running multiple services together?

Docker Compose lets you define several containers in one file, usually `docker-compose.yml`.

### Benefits of Docker Compose:

1. **Easy multi-service startup**  
   Run everything with one command:

   ```
   docker-compose up
   ```

2. **Built-in networking**  
   Services can talk to each other by name —  
   example: NestJS can reach Postgres at `postgres:5432`.

3. **Service isolation**  
   Each service logs separately and restarts independently.

4. **Shared volumes**  
   Persist Postgres data across restarts.

5. **Production-like setup locally**  
   The environment closely mirrors what Focus Bear uses in deployment.

### Summary

Compose handles networking, volumes, environment variables, and service management, making the developer workflow much simpler.

---

## 4. How can you expose API logs and debug a running container?

### Common ways to debug a NestJS container:

1. **Check logs**

   ```
   docker logs <container-name>
   ```

   Good for errors, boot logs, and HTTP request logs.

2. **Attach to the running container**

   ```
   docker exec -it <container-name> sh
   ```

   Lets you:

   - inspect files
   - confirm environment variables
   - test network connections (e.g., `ping postgres`)

3. **Enable hot-reload in development**

   - Use a bind mount so NestJS restarts automatically when files change.
   - Example snippet:
     ```yml
     volumes:
       - .:/app
     ```

4. **Check container health**
   If using a health check, run:

   ```
   docker inspect <container-name>
   ```

5. **Test API connectivity**
   From inside the container:
   ```
   curl http://localhost:3000
   ```
   or test from Postman / Bruno on your host machine.

---

## Summary

Using Docker with NestJS gives a stable, production-like environment.  
A Dockerfile defines the app's environment, multi-stage builds reduce image size, Docker Compose manages multiple services, and logs + `docker exec` help with debugging.  
This setup makes backend development more consistent and predictable.

---

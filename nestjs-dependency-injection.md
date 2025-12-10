# Dependency Injection in NestJS

This document explains how dependency injection (DI) works in NestJS, why it improves project structure, and how providers, scopes, and automatic resolution work.

---

## 1. How does dependency injection improve maintainability?

Dependency injection helps your code stay clean and easy to change.

### Why it improves maintainability:

1. It **separates logic**, so each class only focuses on one job.
2. It makes the code **loosely coupled** — classes do not create their own dependencies.
3. It is easier to **replace or update a service** without touching other parts of the app.
4. It helps with **testing**, because you can swap real services with mock versions.
5. It reduces repeated code because shared logic is injected instead of recreated.

---

## 2. What is the purpose of the `@Injectable()` decorator?

`@Injectable()` tells NestJS that a class can be managed by the DI system.

### Its purpose:

- It marks the class as a **provider**, so NestJS can create and inject it.
- It lets NestJS **control the lifecycle** of the service.
- It allows you to use the service inside controllers or other services.
- Without `@Injectable()`, NestJS cannot resolve the dependency automatically.

Example:

```ts
@Injectable()
export class UsersService {}
```

This makes `UsersService` available for injection.

---

## 3. What are the different provider scopes, and when would you use each?

NestJS providers can have different lifecycles depending on your needs.

### Provider Scopes:

1. **Singleton (default)**

   - One instance for the whole application.
   - Best for shared logic, DB services, utilities, etc.

2. **Request Scope**

   - A new instance is created for every incoming request.
   - Useful when storing **request-specific data**, like user context or logs.

3. **Transient Scope**
   - Every injection creates a new instance.
   - Good for services that must be **fully independent**, such as calculators or builders.

### Summary:

- **Singleton** → Most common, general logic
- **Request** → Request-bound state
- **Transient** → Fully fresh instance each time

---

## 4. How does NestJS automatically resolve dependencies?

NestJS uses **TypeScript metadata** and the DI container to figure out what a class needs.

### How dependency resolution works:

1. You list dependencies in the constructor:

```ts
constructor(private usersService: UsersService) {}
```

2. NestJS reads the type information (`UsersService`) using **reflect-metadata**.
3. It checks if the service is a provider inside a module.
4. It creates the instance (or reuses it if it's a singleton).
5. It injects it into the class automatically.

### You don’t need to manually create new classes:

- No more `new UsersService()`
- NestJS handles the creation and wiring for you

This makes the whole application easier to scale and maintain.

---

## Summary

Dependency injection is one of the most powerful features of NestJS.  
It helps organize the code, improves testability, and keeps logic separated.  
Providers, scopes, and automatic resolution all work together to create a clean and modular backend architecture.

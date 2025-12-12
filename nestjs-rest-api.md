# Creating REST APIs with NestJS

This document explains how REST APIs are built in NestJS, the role of controllers and services, and why separating responsibilities is important.

---

## 1. What is the role of a controller in NestJS?

The controller is responsible for:

1. Receiving HTTP requests from the client.
2. Defining API routes such as GET, POST, PUT, and DELETE.
3. Mapping requests to the correct handler methods.
4. Extracting data from requests (params, body, query).
5. Returning responses to the client.

Controllers act as the entry point of the API.

---

## 2. How should business logic be separated from the controller?

Business logic should be separated by:

1. Keeping controllers thin and simple.
2. Moving complex logic into services.
3. Letting controllers only handle request and response flow.
4. Making services reusable across different controllers.
5. Improving readability and testability of the code.

This separation follows the single responsibility principle.

---

## 3. Why is it important to use services instead of handling logic inside controllers?

Using services is important because:

1. Controllers become easier to read and maintain.
2. Business logic can be reused in multiple places.
3. Code is easier to test with unit tests.
4. Changes in logic do not affect routing code.
5. The project structure stays clean and scalable.

Services help keep the application well-organised.

---

## 4. How does NestJS automatically map request methods (GET, POST, etc.) to handlers?

NestJS maps request methods by:

1. Using decorators like @Get(), @Post(), @Put(), and @Delete().
2. Linking decorators to specific controller methods.
3. Matching the HTTP method and route path.
4. Automatically routing requests to the correct function.
5. Reducing manual routing configuration.

This makes API routing clear and easy to understand.

---

## Summary

In NestJS, controllers handle HTTP requests while services handle business logic.  
This separation improves code clarity, reusability, and maintainability.  
NestJS decorators make REST API routing simple and structured.

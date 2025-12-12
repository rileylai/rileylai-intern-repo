# Using Interceptors & Middleware in NestJS — Reflection

This document explains the difference between interceptors and middleware in NestJS, when to use each one, and how LoggerErrorInterceptor helps improve backend code.

---

## 1. What is the difference between an interceptor and middleware in NestJS?

**Middleware**:

1. Runs before the request reaches the controller.
2. Works at a lower level (similar to Express middleware).
3. Can access request and response objects.
4. Is often used for logging, authentication checks, or modifying requests.
5. Does not know what controller or handler will be executed.

**Interceptor**:

1. Runs before and after the controller method.
2. Has access to execution context and handler result.
3. Can modify both the request flow and the response data.
4. Is commonly used for logging, response transformation, and error handling.
5. Is more tightly integrated with NestJS features.

**In short**:  
Middleware works **before routing**, interceptors work **around controller logic**.

---

## 2. When would you use an interceptor instead of middleware?

You should use an interceptor when:

1. You need to access or modify the controller response.
2. You want to measure execution time of a request.
3. You want to transform response data into a standard format.
4. You need to handle errors related to business logic.
5. You want logic that depends on which controller or method is called.

Middleware is better for simple, early request processing, while interceptors are better for NestJS-level logic.

---

## 3. How does LoggerErrorInterceptor help?

LoggerErrorInterceptor helps because:

1. It catches errors during request handling.
2. It logs useful error details automatically.
3. It keeps error logging logic out of controllers.
4. It makes debugging easier by centralising error handling.
5. It helps keep controllers clean and focused on business logic.

Using this interceptor improves code readability and makes error tracking more consistent.

---

## Summary

Middleware and interceptors both help handle cross-cutting concerns, but they serve different purposes.  
Middleware works early in the request lifecycle, while interceptors provide more control around controller execution.  
Using LoggerErrorInterceptor helps create cleaner, more maintainable backend code.

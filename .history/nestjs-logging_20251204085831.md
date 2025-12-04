# Logging & Error Handling in NestJS
This document answers all questions from the logging & error handling onboarding task.

---

## 🔍 Research & Learn

### **1. What are the benefits of using nestjs-pino for logging?**
`nestjs-pino` provides:
- **High-performance structured logging** using the Pino engine  
- **JSON-formatted logs** ideal for production monitoring tools  
- **Low overhead**, making it faster than traditional console logging  
- **Request context logging**, allowing logs to be tied to each HTTP request  
- **Better observability**, helping trace issues and measure application health  

It improves clarity, performance, and debugging effectiveness.

---

### **2. How does global exception handling improve API consistency?**
Global exception handling:
- Ensures all errors follow a **consistent response format**  
- Prevents raw errors or stack traces from leaking to clients  
- Centralizes logic for logging and formatting errors  
- Improves developer productivity by reducing duplicate error-handling code  
- Provides a predictable structure for frontend and mobile clients  

This makes APIs safer and easier to consume.

---

### **3. What is the difference between a logging interceptor and an exception filter?**
**Logging Interceptor**
- Runs before and after a controller method  
- Logs request/response lifecycle, execution time, and metadata  
- Useful for performance monitoring and request tracing  

**Exception Filter**
- Runs ONLY when an error is thrown  
- Catches exceptions and formats them into consistent error responses  
- Ideal for handling unexpected errors or mapping custom exceptions  

Interceptors track normal flows; exception filters handle error flows.

---

### **4. How can logs be structured to provide useful debugging information?**
Useful structured logs should include:
- Timestamp  
- Request method (GET/POST/etc.)  
- Request URL  
- User ID (if authenticated)  
- Correlation/request ID  
- Execution time  
- Error messages (if any)  
- Context name (service/controller)  

This helps developers quickly trace issues, follow request paths, and diagnose production errors effectively.

---

## 🛠️ Tasks

### **5. Research NestJS logging**
I reviewed how Nest uses Pino for high-performance logging.

### **6. Set up structured logging**
I learned how to configure `nestjs-pino` in the app module to log incoming requests.

### **7. Exception handling**
I reviewed how Nest’s built-in `HttpExceptionFilter` formats errors globally.

### **8. Custom exception filter**
I learned how to create a custom filter to define standardized API error response structures.
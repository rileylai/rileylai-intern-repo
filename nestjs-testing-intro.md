# Introduction to Testing in NestJS
This document answers all questions from the introduction to testing onboarding task.

---

## 🔍 Research & Learn

### **1. What are the key differences between unit, integration, and E2E tests?**
- **Unit tests:**  
  Test a single function or class in complete isolation. They mock all dependencies and focus only on business logic.

- **Integration tests:**  
  Test how multiple modules or services work together. Some dependencies (like a service or database repository) may be mocked less heavily or replaced with test doubles.

- **E2E tests (end-to-end):**  
  Test the entire application flow through actual HTTP requests using tools like Supertest. They simulate real-world usage by going through controllers, services, and modules together.

Each type serves a different level of confidence and has different performance trade-offs.

---

### **2. Why is testing important for a NestJS backend?**
Testing ensures:
- Stability and reliability of backend logic  
- Prevention of regressions when adding new features  
- Confidence in API behavior  
- Correct handling of validation, authentication, and business rules  
- Better developer experience by catching bugs early  

For Focus Bear, testing is crucial because multiple services rely on consistent data and dependable API behavior.

---

### **3. How does NestJS use `@nestjs/testing` to simplify testing?**
NestJS provides the `@nestjs/testing` package, which:
- Creates a lightweight testing module using `Test.createTestingModule()`  
- Allows you to inject controllers, services, and providers in isolation  
- Lets you override or mock providers easily  
- Makes unit and integration setup consistent across tests  

It removes the need to manually instantiate complex dependency graphs.

---

### **4. What are the challenges of writing tests for a NestJS application?**
Common challenges include:
- Understanding how to mock dependencies in modules with many providers  
- Setting up testing modules correctly when modules import other modules  
- Handling asynchronous logic and Promises  
- Avoiding brittle tests that depend too much on implementation details  
- Ensuring tests cover meaningful behavior instead of just raising coverage numbers  

Awareness of these challenges helps create cleaner, more maintainable test suites.

---

## 🛠️ Tasks

### **5. Research testing types**
I learned how unit, integration, and E2E tests differ in structure and purpose.

### **6. Role of Jest**
I reviewed how Jest is used as the main testing framework in NestJS for running tests and creating mocks.

### **7. How to test modules**
I practiced creating test modules using `@nestjs/testing` and injecting providers for testing.

### **8. Run a sample test**
I reviewed examples of running basic Jest tests inside a NestJS project.
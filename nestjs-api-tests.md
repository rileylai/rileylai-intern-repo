# Using Jest & Supertest for API Testing in NestJS
This document answers all questions from the API testing onboarding task.

---

## 🔍 Research & Learn

### **1. How does Supertest help test API endpoints?**
Supertest allows you to send HTTP requests directly to your NestJS application without starting a real server. It creates an in-memory HTTP layer that lets you test endpoints end-to-end, including routes, controllers, pipes, guards, and responses. This ensures that APIs behave as expected from the client’s perspective.

---

### **2. What is the difference between unit tests and API tests?**
- **Unit tests** verify a single function or class in isolation, often using mocks.  
- **API tests** (integration tests) verify the entire request flow, including routing, validation, guards, interceptors, and actual responses.

Unit tests check small pieces of logic, while API tests check how pieces interact together.

---

### **3. Why should authentication be mocked in integration tests?**
Mocking authentication:
- Avoids depending on real JWTs or external services  
- Allows you to test protected routes without requiring a login flow  
- Lets you control the user identity during tests  
- Makes tests faster and more stable  

Mocking keeps tests focused on the endpoint behavior instead of the authentication process.

---

### **4. How can you structure API tests to cover both success and failure cases?**
You can structure effective API tests by:
- Writing a **success case** (e.g., valid payload returns 200 + correct response)  
- Writing a **validation failure case** (e.g., missing or invalid inputs return 400)  
- Writing an **authentication failure case** (e.g., missing token returns 401)  
- Writing an **authorization failure case** if roles are involved  
- Testing **unexpected errors** if applicable  

This ensures the endpoint behaves correctly under all realistic scenarios.

---

## 🛠️ Tasks

### **5. Supertest research**
I learned how Supertest sends in-memory requests and integrates with Nest’s `Test.createTestingModule`.

### **6. GET endpoint test**
I reviewed how to write and assert a simple GET API test.

### **7. POST endpoint test with validation**
I learned how to send JSON payloads and assert validation errors and success responses.

### **8. Mocking authentication**
I reviewed how to mock JWT guards or inject a test JWT to access protected routes.
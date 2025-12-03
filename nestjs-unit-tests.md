# Writing Unit Tests for Services & Controllers in NestJS
This document answers all questions from the unit testing onboarding task.

---

## 🔍 Research & Learn

### **1. Why is it important to test services separately from controllers?**
Services contain business logic, while controllers only manage HTTP requests and pass data into services. Testing them separately ensures that:
- Business logic is validated independently  
- Controller tests stay small and focused  
- Failures are easier to trace  
- Code remains modular and maintainable  

If everything is tested together, issues become harder to isolate.

---

### **2. How does mocking dependencies improve unit testing?**
Mocking allows you to:
- Replace real services, repositories, or APIs with lightweight controlled mock versions  
- Avoid slow operations or external calls  
- Test only the logic in the unit under test  
- Simulate different scenarios by changing mock return values  

This keeps tests fast, reliable, and predictable.

---

### **3. What are common pitfalls when writing unit tests in NestJS?**
Common mistakes include:
- Testing too much in one test  
- Forgetting to mock dependencies  
- Mocking everything so heavily that real behavior is never tested  
- Only testing the “happy path”  
- Not asserting meaningful outcomes  
- Not resetting mocks between tests  

Avoiding these pitfalls leads to clear, stable tests.

---

### **4. How can you ensure that unit tests cover all edge cases?**
You can ensure full coverage by:
- Testing success and failure cases  
- Testing invalid inputs and unexpected conditions  
- Including boundary values and edge scenarios  
- Verifying both returned results and thrown errors  
- Reviewing business logic paths to spot untested branches  

A well-designed test suite covers all logical branches in the service or controller.

---

## 🛠️ Tasks

### **5. Research Jest unit testing in NestJS**
I learned how Nest’s testing module allows unit testing individual providers and controllers.

### **6. Write a service unit test**
I practiced writing a service test that validates business logic with mocked dependencies.

### **7. Write a controller unit test**
I learned how controllers use mocked services to test request handling and returned outputs.

### **8. Mock dependencies**
I reviewed how to mock providers using `jest.mock()`, `jest.fn()`, and NestJS’s `useValue` utility.
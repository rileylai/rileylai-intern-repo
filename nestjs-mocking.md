# Mocking Dependencies & Database Interactions in NestJS
This document answers all questions from the mocking onboarding task.

---

## 🔍 Research & Learn

### **1. Why is mocking important in unit tests?**
Mocking isolates the code under test by replacing real dependencies with controlled substitutes. This ensures tests run fast, avoid calling external systems, and focus only on the logic of the specific module. It makes tests predictable, stable, and easier to debug because failures are not caused by unrelated services or databases.

---

### **2. How do you mock a NestJS provider (e.g., a service in a controller test)?**
You can mock a provider by:
- Using `jest.fn()` to create mock functions  
- Providing a custom mock object in the test module setup  
- Replacing the real provider using `{ provide: Service, useValue: mockService }`

This allows the controller to use the mocked service while keeping the controller logic intact.

---

### **3. What are the benefits of mocking the database instead of using a real one?**
Mocking the database:
- Avoids slow queries  
- Removes the need for a running DB  
- Prevents modifying real data  
- Makes failures easier to trace  
- Allows testing specific edge cases by controlling the returned data  

It ensures the service logic is tested without depending on infrastructure.

---

### **4. How do you decide what to mock vs. what to test directly?**
You mock:
- Dependencies that are not the focus of the test  
- External services, APIs, and databases  
- Anything that introduces randomness or side effects  

You test directly:
- The business logic of the module being tested  
- Input/output behavior of the function  
- Any transformations, validations, or decision-making  

The goal is to isolate logic while still ensuring realistic interactions.

---

## 🛠️ Tasks

### **5. Research mock utilities**
I learned how Jest mocking tools (`jest.mock`, `jest.fn`, `jest.spyOn`) and NestJS testing utilities work.

### **6. Mock a service**
I reviewed how to mock a service for a controller test using `useValue` in the testing module.

### **7. Mock a database repository**
I practiced using a mocked `TypeORM` repository to test service logic without hitting the real DB.

### **8. When to use `jest.spyOn` vs. `jest.fn`**
I learned that `jest.fn()` creates standalone mock functions, while `jest.spyOn()` wraps existing object methods for controlled monitoring.
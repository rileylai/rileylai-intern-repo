# Understanding the Focus Bear Coverage Bar & Writing Meaningful Tests
This document answers all questions from the test coverage onboarding task.

---

## 🔍 Research & Learn

### **1. What does the coverage bar track, and why is it important?**
The coverage bar tracks how much of the codebase is executed when running tests. It measures coverage types such as lines, branches, functions, and statements. It’s important because it helps ensure code is thoroughly tested, reduces untested logic, and increases confidence in software quality before deployment.

---

### **2. Why does Focus Bear enforce a minimum test coverage threshold?**
Focus Bear requires a minimum of **80% test coverage** to maintain reliability, prevent regressions, and ensure new code is accompanied by appropriate tests. This threshold encourages developers to write consistent and complete tests for all new features and changes.

---

### **3. How can high test coverage still lead to untested functionality?**
High coverage does not guarantee meaningful tests. It’s possible to:
- Write tests that “touch” the code but don’t assert real behavior  
- Mock too much, causing tests to skip real logic  
- Cover code paths without verifying outcomes  
- Use shallow assertions that don’t validate business rules  
Therefore, coverage numbers alone can be misleading without strong assertions.

---

### **4. What are examples of weak vs. strong test assertions?**
**Weak assertions**:
- Only checking that a function “runs without crashing”  
- Expecting `true` on a trivial condition  
- Mocking everything and never testing real logic  
- Not verifying returned values or side effects  

**Strong assertions**:
- Verifying the exact returned result and why it’s correct  
- Asserting side effects such as database writes or emitted events  
- Testing error states, not just success states  
- Confirming that mocks were called with the correct arguments  

---

### **5. How can you balance increasing coverage with writing effective tests?**
You can balance both by:
- Creating tests that follow the actual behavior and business rules  
- Including both success and failure cases  
- Targeting edge cases and complex code paths  
- Improving assertions instead of adding unnecessary test files  
- Avoiding meaningless tests written only to increase percentages  
The goal is to improve both coverage and test quality together.

---

## 🛠️ Tasks

### **6. Research how Jest generates coverage in NestJS**
I learned how Jest uses `collectCoverage` and Istanbul to measure branch, function, line, and statement coverage.

### **7. Run the test suite and read the coverage report**
I practiced running the full suite using `npm run test:cov` and reviewed the HTML and terminal reports.

### **8. Identify untested areas & write additional tests**
I reviewed weak or missing test areas and noted where additional testing improves confidence.

### **9. Research “meaningful test assertions”**
I studied how strong assertions validate behavior more accurately than simple or shallow checks.

### **10. Refactor a weak test**
I refactored a simple test by adding stronger assertions verifying returned data and expected behavior.
# Inspecting API Requests & Responses  
This document answers all questions from the Inspecting API Requests & Responses onboarding task.

---

## 🔍 Research & Learn

### **1. How can logging request payloads help with debugging?**
Logging request payloads allows you to see exactly what data the client is sending to the server. This helps identify incorrect field names, missing fields, wrong data formats, authentication problems, and issues caused by frontend bugs. It ensures the API receives the expected input before deeper debugging.

---

### **2. What tools can you use to inspect API requests and responses?**
Common tools include:
- **Bruno** – simple API testing environment
- **Postman** – full-featured API testing tool  
- **curl** – command-line tool for quick API checks  
- **Browser devtools** – for inspecting outgoing requests from web apps 

These tools help verify request payloads, headers, cookies, and returned status codes.

---

### **3. How would you debug an issue where an API returns the wrong status code?**
I would:
1. Inspect logs for incoming request payloads and headers.  
2. Check the NestJS controller or service logic to confirm whether conditions match the expected flow.  
3. Inspect thrown exceptions, validation pipes, or guards.  
4. Use middleware or interceptors to log outgoing responses.  
5. Re-test the endpoint using Bruno/Postman to confirm the corrected status code.  

By tracing the logic step-by-step, it becomes clear where the incorrect code is generated.

---

### **4. What are some security concerns when logging request data?**
- Sensitive data (passwords, tokens, secrets) may accidentally be stored in logs.  
- Logs can be accessed by unauthorized users if not protected.  
- Large logs can expose personal or private information.  

For safety, sensitive fields should be masked or excluded, and logs must follow secure storage and access policies.

---

## 🛠️ Tasks

### **5. Tools for inspecting API requests**
I researched and learned how tools like Bruno, Postman, and curl help inspect payloads, headers, and responses.

### **6. Logging request payloads in NestJS**
I reviewed how controllers can log incoming payloads using `@Body()`, request objects, and NestJS interceptors.

### **7. Inspecting API responses and HTTP status codes**
I tested how to check returned data, verify success/error codes, and ensure correct response structures.

### **8. Using middleware or interceptors to modify responses**
I learned how NestJS interceptors can wrap, log, transform, or validate outgoing responses.
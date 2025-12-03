# Security Best Practices in NestJS
This document answers all questions from the security best practices onboarding task.

---

## 🔍 Research & Learn

### **1. What are the most common security vulnerabilities in a NestJS backend?**
Common vulnerabilities include:
- **Injection attacks** (SQL injection, command injection)
- **Cross-site scripting (XSS)**
- **Cross-site request forgery (CSRF)**
- **CORS misconfigurations**
- **Unvalidated input**
- **Weak authentication**
- **Exposed sensitive information**
These threats can lead to data leaks, unauthorized access, or compromised systems.

---

### **2. How does @fastify/helmet improve application security?**
`@fastify/helmet` improves security by setting secure HTTP headers.  
It helps:
- Prevent XSS with `X-XSS-Protection`  
- Prevent clickjacking with `X-Frame-Options`
- Enforce secure communication with `Strict-Transport-Security`
- Disable content sniffing with `X-Content-Type-Options`

These headers provide hardened defaults that protect the backend from common browser-based attacks.

---

### **3. Why is rate limiting important for preventing abuse?**
Rate limiting helps prevent:
- Brute-force login attempts  
- API spamming  
- DDoS-style abuse  
- Resource exhaustion  

By using `@fastify/rate-limit`, the backend restricts how many requests a client can make in a time window, reducing the risk of automated or malicious traffic.

---

### **4. How can sensitive configuration values be protected in a production environment?**
Best practices include:
- Storing secrets in **environment variables**  
- Never committing secrets to Git  
- Using secret managers (AWS Secrets Manager, Vault, GCP Secret Manager)  
- Restricting file and IAM access to secrets  
- Rotating keys regularly  
- Avoiding logging sensitive values  

These ensure sensitive data such as API keys, encryption keys, and tokens remain secure.

---

## 🛠️ Tasks

### **5. Research common security risks**
I reviewed common backend vulnerabilities including injection, CSRF, XSS, and CORS issues.

### **6. Explore @fastify/helmet**
I learned how Helmet adds secure HTTP headers to protect the backend.

### **7. Implement rate limiting**
I reviewed how `@fastify/rate-limit` helps defend endpoints against high-volume abuse.

### **8. Secure environment variables**
I learned best practices for managing API keys and secrets safely in production.
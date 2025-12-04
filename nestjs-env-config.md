# Handling Environment Variables & Configuration in NestJS
This document answers all questions from the environment configuration onboarding task.

---

## 🔍 Research & Learn

### **1. How does @nestjs/config help manage environment variables?**
`@nestjs/config`:
- Loads variables from `.env` files  
- Provides a centralized configuration system  
- Allows injecting configuration values using `ConfigService`  
- Supports schema validation for safety  
- Allows different configuration files for different envs (dev/staging/prod)

It simplifies secure and structured configuration management.

---

### **2. Why should secrets (e.g., API keys, database passwords) never be stored in source code?**
Storing secrets in code can cause:
- Accidental leaks via GitHub  
- Exposure when sharing code  
- Compromised servers or databases  
- Security breaches if attackers access the repository  

Secrets must always be kept in **environment variables**, secret managers, or protected configuration systems.

---

### **3. How can you validate environment variables before the app starts?**
You can validate them by:
- Using validation schemas (e.g., Joi) together with `@nestjs/config`  
- Defining required variables with expected types  
- Failing fast if a variable is missing or invalid  

Validation prevents running the app with incomplete or unsafe configuration.

---

### **4. How can you separate configuration for different environments (e.g., local vs. production)?**
Common approaches:
- Multiple `.env` files (`.env.local`, `.env.dev`, `.env.prod`)  
- Environment-specific config modules (`config.development.ts`, `config.production.ts`)  
- Using deployment environment variables (e.g., AWS environment settings)  
- Avoid committing any `.env` files to Git  

This allows flexibility and avoids leaking sensitive information.

---

## 🛠️ Tasks

### **5. Research @nestjs/config**
I learned how it loads and provides configuration values safely.

### **6. Create .env**
I reviewed how a `.env` file stores secrets securely outside of code.

### **7. Validate variables**
I explored how to use Joi to ensure variables meet requirements before bootstrapping.

### **8. Environment separation**
I learned how to structure multiple configs for local and production usage.
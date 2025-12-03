# Using typeorm-encrypted for Data Encryption
This document answers all questions from the data encryption onboarding task.

---

## 🔍 Research & Learn

### **1. Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?**
Database-level encryption (e.g., encryption at rest) protects data stored on disk but does not protect against:
- A compromised database server  
- A leaked database dump  
- Internal access with elevated permissions  

`typeorm-encrypted` adds **field-level encryption**, ensuring even if the database is compromised, sensitive columns remain unreadable. This provides a second layer of protection.

---

### **2. How does typeorm-encrypted integrate with TypeORM entities?**
`typeorm-encrypted` acts as a TypeORM transformer.  
It automatically:
- Encrypts a field **before writing** it to the database  
- Decrypts the field **when reading** it back into the entity  

You simply mark the entity column with a transformer, and TypeORM handles the encryption/decryption automatically.

---

### **3. What are the best practices for securely managing encryption keys?**
Best practices include:
- Storing keys in environment variables, not in code  
- Rotating keys regularly  
- Restricting access to keys using IAM or secret managers  
- Avoiding logging encrypted field values  
- Ensuring keys are long, random, and never checked into version control  
- Using secret management tools (AWS Secrets Manager, Vault) in production  

Key security is critical—if the key leaks, encrypted data becomes readable.

---

### **4. What are the trade-offs between encrypting at the database level vs. the application level?**
**Database-level encryption (encryption at rest):**
- Pros: Protects full DB storage; transparent to app; no code changes  
- Cons: Data is decrypted once loaded—DB admins could still read it  

**Application-level encryption (typeorm-encrypted):**
- Pros: Field-level protection; stays encrypted even in DB dumps; protects from internal DB access  
- Cons: Slight performance overhead; encrypted fields cannot be meaningfully filtered or indexed  

Many systems use both, combining strong security with practical performance.

---

## 🛠️ Tasks

### **5. Research typeorm-encrypted**
I reviewed how encryption transforms fields automatically during read/write.

### **6. Implement encryption in an entity**
I learned how to configure an entity column with a transformer using AES encryption.

### **7. Key management**
I reviewed how to store and load encryption keys securely through environment variables.

### **8. Test encrypted fields**
I practiced encrypting and decrypting entity fields to verify the encryption pipeline.
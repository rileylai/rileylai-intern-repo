# Data Privacy & Confidentiality — Reflection

This document reflects my understanding of Focus Bear’s privacy policy and how I will handle sensitive information responsibly in my work.

---

## 🔍 Research & Learn

### **1. Key takeaways from Focus Bear’s privacy policy**

After reviewing the full privacy policy, these are the main points I learned:

- Focus Bear follows GDPR rules and must protect personal data with clear legal bases.
- Data is collected only for specific, transparent reasons (such as login, subscriptions, analytics, or improving user experience).
- Sensitive data like ADHD status or health-related habits is double-encrypted or anonymised.
- Focus Bear works with trusted third-party providers (e.g., Auth0, AWS, Stripe, Zoho, PostHog, UXCam).
- “by Data” acts as both the EU Representative and the Data Protection Officer (DPO).
- Users have strong rights under GDPR: access, deletion, correction, portability, objection, and more.
- Data is kept only as long as necessary, or longer only in anonymised form.
- Automated decisions (like motivational messages or leaderboard ranking) are allowed but never create legal consequences.
- Users can contact Focus Bear or the DPO for any privacy concerns.

The overall message: **Focus Bear is responsible for protecting user data and must process it lawfully, securely, and transparently.**

---

### **2. What types of data are considered confidential at Focus Bear?**

Confidential data includes:
- Identification data (e.g., email, phone number)
- Habits and lifestyle information
- ADHD or neurodivergence survey responses
- Device data, login records, and crash logs
- Payment details (handled by Stripe/Paddle)
- Feedback, surveys, marketing preferences
- Any health-related habits (double encrypted)
- Any data collected from Google APIs (covered by Google’s Limited Use Policy)
- Internal documents, system architecture, and company communications

Anything that can identify a user—or reveal their behaviour, preferences, or health—is confidential.

---

### **3. Best practices for handling confidential data**

Based on the privacy policy and general best practices:

- Access only the data you actually need (“least privilege”).
- Never store raw data on personal devices unless encrypted.
- Keep credentials secure and never share API keys.
- Use secure channels like Discord, Teams, or email for work.
- Never screenshot sensitive info unless necessary—and check before sharing.
- Follow GDPR requirements around consent and purpose limitation.
- Respect anonymisation rules when handling analytics.
- Always follow internal logging and error reporting procedures safely.

---

### **4. How to respond to a suspected data breach or accidental leak?**

If a breach or leak happens:

1. **Stop immediately** and avoid accessing further data.
2. **Report it quickly** to the CEO or DPO (privacy@focusbear.io).
3. Provide details (what happened, where, what data might be affected).
4. Rotate or revoke leaked credentials (API keys, passwords, etc.).
5. Follow instructions to contain the incident.
6. Avoid deleting evidence—this helps auditing and fixes.

Quick reporting reduces risk to users and shows responsibility.

---

## 📝 Reflection

### **5. What steps can you take to ensure you handle data securely in your daily tasks?**

I will:
- Use strong, unique passwords and enable 2FA everywhere.
- Keep my laptop locked when not in use.
- Avoid saving personal data in local notes or screenshots.
- Use only official tools (e.g., GitHub, Discord, Focus Bear systems).
- Verify files before sharing to avoid exposing internal information.
- Follow safe coding practices (e.g., no logging sensitive data).

Small habits add up to strong protection.

---

### **6. How should you store, share, and dispose of sensitive information safely?**

**Store:**
- Only in secure cloud systems (AWS, Auth0, internal systems).
- Never in plain text or unprotected files.

**Share:**
- Use company-approved channels (email, Discord, Teams).
- Share only with teammates who need the information.
- Avoid exposing API keys, logs with personal data, or user IDs.

**Dispose:**
- Delete local copies securely.
- Remove temporary files and downloaded logs.
- Clear screenshots or sensitive documents after use.

---

### **7. Common mistakes that lead to data privacy issues, and how to avoid them**

Common mistakes:
- Sharing screenshots with emails or habit names still visible.
- Forgetting to hide sensitive logs before sending.
- Using weak or reused passwords.
- Leaving devices unlocked in public spaces.
- Hardcoding credentials in code or commits.

Avoidance:
- Always double-check before sending files.
- Use password managers.
- Follow Git hygiene (no sensitive files committed).
- Be mindful when working in cafes or libraries.
- Follow the privacy policy’s consent and purpose rules.

---

## 🛠️ Task

### **8. One habit I will adopt to improve data security**

I will always **sanitise logs, screenshots, and code before I share them**, removing any personal data, tokens, or identifiers. This helps prevent accidental leaks.

---

### **9. One key learning I will implement**

My biggest learning is that **privacy protection is built on daily behaviours, not big actions**.  
I will implement a routine of checking for sensitive information in everything I upload or commit, especially when working with logs, errors, or user-related data.

# Background Jobs with BullMQ & Redis in NestJS
This document answers all questions from the background jobs onboarding task.

---

## 🔍 Research & Learn

### **1. Why is BullMQ used instead of handling tasks directly in API requests?**
BullMQ allows long-running tasks to be processed asynchronously in the background rather than blocking an API request.  
This keeps the API fast and responsive while heavy tasks (sending emails, syncing data, analytics, notifications) run independently.  
It improves performance, reliability, and scalability.

---

### **2. How does Redis help manage job queues in BullMQ?**
Redis stores:
- Pending jobs  
- Active jobs  
- Delayed jobs  
- Failed jobs  
- Retry counts  
- Job metadata and progress  

Redis acts as a fast, in-memory data store that BullMQ uses to coordinate job scheduling, locking, retrying, and worker assignment.

---

### **3. What happens if a job fails? How can failed jobs be retried?**
If a job fails:
- BullMQ records the error and moves the job to the *failed* state.  
- The job can automatically retry based on its configuration (`attempts`, `backoff`).  
- Developers can inspect the failure, reprocess the job, or send alerts.  

Retries help ensure temporary problems (e.g., network issues) do not cause permanent failures.

---

### **4. How does Focus Bear use BullMQ for background tasks?**
Focus Bear uses BullMQ to handle:
- Sending email notifications  
- Syncing data between services  
- Processing analytics  
- Handling scheduled tasks  
- Offloading heavy operations to background workers  

This ensures the backend stays fast even when performing complex or time-consuming work.

---

## 🛠️ Tasks

### **5. BullMQ research**
I learned how BullMQ is used for background processing and how queues/workers communicate.

### **6. Set up BullMQ in NestJS**
I reviewed how `BullModule` and workers are configured in a NestJS module.

### **7. Create a simple queue**
I learned how to enqueue jobs and process them using a worker handler.

### **8. Explore Redis storage**
I reviewed how Redis stores queued jobs, failures, retries, and job metadata.
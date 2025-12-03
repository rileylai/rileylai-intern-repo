# Debugging with VS Code & Breakpoints
This document answers all questions from the Debugging with VS Code & Breakpoints onboarding task.

---

## 🔍 Research & Learn

### **1. How do breakpoints help in debugging compared to console logs?**
Breakpoints allow you to pause the program at an exact line and inspect variables, function calls, and application state in real time. Unlike console logs, which only show what you choose to print, breakpoints give full visibility into the current execution stack, nested objects, and how data flows through the application. They are more precise and reduce unnecessary logging noise.

---

### **2. What is the purpose of `launch.json`, and how does it configure debugging?**
`launch.json` tells VS Code **how to start and attach the debugger**. It specifies:
- The runtime (Node.js for NestJS)
- The entry file (`main.ts`)
- Whether the debugger should watch for file changes
- What environment variables to load
- The port for debugging (`--inspect`)

Without `launch.json`, VS Code wouldn’t know how to attach breakpoints or run the backend in debug mode.

---

### **3. How can you inspect request parameters and responses while debugging?**
While paused at a breakpoint, you can:
- Look at the **Variables** panel to inspect `req.body`, `req.params`, headers, or query strings  
- Hover over variables in the editor to see their values  
- Step into controller or service functions to trace where each parameter flows  
This helps confirm whether the API is receiving and returning the expected values.

---

### **4. How can you debug background jobs that don’t run in a typical request–response cycle?**
You can debug background jobs by:
- Placing breakpoints inside the scheduled job, worker, or event handler  
- Running the app in debug mode so VS Code attaches to all running tasks  
- Using logs + breakpoints in combination to detect when the job triggers  
- If needed, manually calling the job function during debugging to trigger the logic  
This allows debugging even when the task does not follow normal API routes.

---

## 🛠️ Tasks

### **5. Configure NestJS debugging in VS Code**
I learned how to set up a valid `launch.json` and enable the `--inspect` mode.

### **6. Set up breakpoints in controller and service layers**
I practiced placing breakpoints to pause at API request handling and observe incoming parameters.

### **7. Step through execution**
I stepped through functions line by line and watched how variable values changed during execution.

### **8. Debug background tasks**
I reviewed how scheduled jobs and queued tasks can also be debugged using breakpoints and debug mode.
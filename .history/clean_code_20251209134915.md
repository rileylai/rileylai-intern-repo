# Clean Code Principles

This document explains core clean code principles and why they matter in real-world development.

---

## 1. Simplicity  
Simplicity means writing code that is easy to understand and easy to change.  
Simple code focuses on solving the problem directly, without unnecessary steps.  
When code is simple, developers can work faster and make fewer mistakes.

---

## 2. Readability  
Readable code is code that can be understood quickly, even by someone who did not write it.  
Good readability includes clear naming, good formatting, and logical structure.  
If code is readable, it reduces confusion, speeds up development, and improves teamwork.

---

## 3. Maintainability  
Maintainable code should be easy to update or fix.  
Future developers (including myself) should be able to understand what the code does without guessing.  
Clean structure, small functions, and clear comments make the code easier to maintain over time.

---

## 4. Consistency  
Consistency means following the same style, patterns, and conventions across the whole project.  
When every file looks and feels the same, it becomes easier to navigate and reason about the code.  
Teams often use style guides (like Airbnb for JavaScript) to keep code consistent.

---

## 5. Efficiency  
Efficient code performs well without unnecessary work.  
However, clean code avoids premature optimization.  
First make it correct and readable, then optimise only when needed.

---

# Example of Messy Code

```js
function c(a,b){let x=0;for(let i=0;i<a.length;i++){if(a[i]==b){x++}}return x}
```

### Why this code is difficult to read:
- The function name `c` is not meaningful.  
- The variable `x` does not say what it represents.  
- There are no spaces or formatting to help readability.  
- The purpose of the function is not clear at first glance.

---

# Cleaned and Improved Version

```js
// Count how many times a target value appears in an array
function countOccurrences(array, target) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      count++;
    }
  }

  return count;
}
```

### Why the clean version is better:
- Clear function name that explains its purpose.  
- Meaningful variable names (`count`, `array`, `target`).  
- Proper formatting and spacing.  
- A comment explains the function at a high level.  
- Easy for any developer to read and update.

---

I learned that clean code is not just about writing code that works, but writing code that will still be easy to understand months or years later.
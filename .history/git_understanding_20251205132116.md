
# Understanding Merge Conflicts


## 🔍 1. What caused the conflict?
The conflict happened because I edited the same part of the same file on two different branches.  
On my feature branch, I changed a line of text. Then I switched back to the main branch and changed the exact same line in a different way. When I tried to merge the feature branch back into main, Git did not know which version was correct, so it created a merge conflict.

---

## 🔧 2. How did you resolve it?
I used my Git desktop client to resolve the conflict. The file showed two versions:  
- the version from **main**  
- the version from **my feature branch**

I selected the version I wanted to keep and removed the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`). After choosing the final text, I saved the file. Then I staged the file, committed the merge, and pushed the resolved version to GitHub.

---

## 📘 3. What did you learn?
I learned that merge conflicts usually happen when two branches edit the same lines in different ways. Git cannot guess the correct version, so I must decide manually. I also learned how to use the Git client to review both versions and choose the final result. This experience made me understand why communication and small, frequent commits are important to avoid big conflicts in real projects.

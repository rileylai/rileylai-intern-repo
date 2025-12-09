# Understanding Git: Conflicts, Staging, Committing, and Branching

This document collects my notes from different Git topics.  
Each section comes from a specific onboarding task.

---

# 🔥 Section 1: Understanding Merge Conflicts

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

---

# 📦 Section 2: Git Concepts — Staging vs. Committing

## 1. What is the difference between staging and committing?
**Staging** means selecting which changes you want to include in your next commit.  
**Committing** means saving those staged changes into the project history.

Staging lets me prepare and review my changes.  
Committing creates a permanent record of them.

---

## 2. Why does Git separate these two steps?
Git separates them to give developers more control.  
This allows me to:

- group changes into meaningful commits  
- commit only part of my work  
- preview changes before saving them  
- avoid mistakes

It keeps the commit history cleaner and easier to understand.

---

## 3. When would you stage changes without committing?
Some useful moments are:

- when I want to commit only part of my work  
- when I want to review changes before saving  
- when I want to run tests first  
- when I am preparing a clear commit message  
- when some unfinished changes should not be committed yet

Staging helps me work more carefully.

---

## 4. Experiment summary
I tried staging a file, then checking with `git status`.  
I then removed it from staging using `git reset HEAD <file>`, and later committed it.  
This experiment helped me see clearly how staging and committing are two separate steps.

---

# 🌿 Section 3: Branching & Team Collaboration

## 1. Why is pushing directly to `main` problematic?
Pushing directly to `main` can overwrite other people’s work and make the project unstable.  
There is no review step, and mistakes go straight into the main codebase.

Branches help keep `main` clean and safe.

---

## 2. How do branches help with reviewing code?
Branches allow each feature or fix to stay separate.  
This makes reviewing easier because teammates can:

- look at one change at a time  
- add comments  
- test safely  
- accept or reject changes through a pull request

It improves teamwork and reduces bugs.

---

## 3. What happens if two people edit the same file on different branches?
Git will try to combine both changes.  
If the edits are on different lines, Git merges them automatically.  
If they are on the same lines, a **merge conflict** happens.

A human must then choose which version is correct.

---

## 4. My branching experiment
I created a new branch, made a small edit, and committed it there.  
When I switched back to `main`, the changes were not present, which showed how branches isolate work.  
This helped me understand why teams always use branches for collaboration.

---

---

# ⚙️ Section 4: Advanced Git Commands & When to Use Them

This section covers advanced Git commands and my reflections after testing them.

---

## 1. What does each command do?

### **git checkout main -- <file>**
Restores a specific file from the `main` branch without changing anything else.  
Useful when I want only one file from `main` instead of switching branches.

### **git cherry-pick <commit>**
Applies a specific commit from another branch onto my current branch.  
This lets me take one change without merging the whole branch.

### **git log**
Shows the commit history.  
I can see commit messages, authors, timestamps, and how the project evolved.

### **git blame <file>**
Shows who last modified each line of a file and when.  
This helps track why a change happened or who to ask about a piece of code.

---

## 2. When would you use these commands in a real project?

### **git checkout main -- <file>**
- When I accidentally changed a file and want to restore the clean version  
- When I want only one file from another branch

### **git cherry-pick**
- When I want to bring a bug fix into `main` without merging a whole feature branch  
- When two branches need the same small update  
- When a developer adds something useful that I want to reuse directly

### **git log**
- When reviewing project history  
- When checking which commit introduced a bug  
- When preparing release notes or understanding recent changes

### **git blame**
- When I want to understand who changed a line and why  
- When debugging strange behaviour in the code  
- When learning the history of a file during onboarding

These commands are very important in long-running projects with many developers.

---

## 3. What surprised you while testing these commands?

I was surprised how powerful and detailed these commands are.  
`git blame` showed exactly who changed each line, which made the history very clear.  
`git cherry-pick` also surprised me because it allowed me to bring one specific commit into `main` without touching anything else.  
I also learned that `git checkout <file>` is a safe way to undo unwanted changes without resetting the whole project.

These tools make Git feel more like a time machine that helps me understand and control the codebase.

---

---

# 🎯 Section 5: Understanding `git bisect`

This section explains what `git bisect` does and what I learned from testing it in my repo.

---

## 1. What does `git bisect` do?

`git bisect` helps find which commit introduced a bug.  
It uses a binary search method: Git repeatedly checks half of the commit history until it finds the first bad commit.

Instead of checking every commit manually, `git bisect` narrows it down step by step, which makes debugging much faster.

---

## 2. When would you use it in a real-world debugging situation?

I would use `git bisect` when:

- A bug appears, but we don’t know which commit created it  
- The project has many commits and checking them one by one is too slow  
- The bug is reproducible, so I can test “good” vs “bad” states  
- Multiple developers are working together, and changes happen in different areas

This tool is especially useful in long-running projects with many contributors.

---

## 3. How does it compare to manually reviewing commits?

Manual reviewing:

- takes a long time  
- is easy to make mistakes  
- requires reading many diffs  

`git bisect`:

- automatically jumps to the commit you should test  
- reduces the number of checks from many commits to only a few  
- is faster and more reliable  
- gives a clear final answer: **the exact commit that broke the code**

After testing it myself, I saw how much time it saves compared to manual searching.

---

## 🔬 My experiment

I created several test commits and introduced a small bug on purpose.  
Then I ran:

```
git bisect start
git bisect bad
git bisect good <commit-hash>
```

Git guided me through checking different commits, asking me each time if they were **good** or **bad**.  
After a few steps, it identified the exact commit where the bug appeared.

This helped me understand how powerful and efficient `git bisect` is.

---

---

# ✏️ Section 6: Writing Meaningful Commit Messages

This section explains what makes a good commit message and why it matters in team projects.

---

## 1. What makes a good commit message?

A good commit message is:

- **Clear** — It explains what changed.  
- **Specific** — It includes enough detail so others understand the update.  
- **Concise** — It is short, but still meaningful.  
- **Action-based** — It starts with a verb (e.g., “Fix bug”, “Add API route”).  
- **Consistent** — It follows a format used by the team (like Conventional Commits).

A well-written message helps everyone understand the purpose of the change without reading the whole diff.

---

## 2. How does a clear commit message help in team collaboration?

Clear commit messages help teamwork because:

- Teammates can quickly understand what changed and why  
- Code reviews become easier and faster  
- Future developers can trace the history of a feature  
- It reduces confusion when debugging or merging branches  
- It improves communication without needing long explanations

Good commit messages act like documentation for the project’s history.

---

## 3. How can poor commit messages cause issues later?

Poor commit messages can create problems such as:

- Nobody understands what the commit actually did  
- Debugging becomes slower because the history is unclear  
- Developers may undo or change the wrong thing  
- It becomes hard to see when or why a bug was introduced  
- New team members struggle to understand the project

Examples of bad messages include:  
- “fixed stuff”  
- “update”  
- “temp changes”  

These messages give no information and make the history messy.

---

## 🧪 My experiment with commit message styles

### **1. A vague commit message**
Example:  
```
fixed stuff
```
This message gave no hints about what was fixed. It would be confusing in a real project.

### **2. An overly detailed commit message**
Example:  
```
Fix issue in button component by adjusting CSS margin and updating the click handler logic so it triggers the correct event when the user presses enter or space, also improved comments and removed unused code.
```
Too long and hard to read. It mixes multiple changes and makes the history noisy.

### **3. A well-structured commit message**
Example:  
```
fix(button): correct click handler event and adjust spacing
```
Clear, short, and easy to understand. It follows a common structure and explains the purpose.

---

---

# 🔄 Section 7: Understanding Pull Requests (PRs)

This section explains what I learned about creating and reviewing Pull Requests.

---

## 1. Why are PRs important in a team workflow?

Pull Requests are important because they:

- allow teammates to review code before it is merged  
- prevent mistakes from going into `main`  
- encourage discussions about design and code quality  
- help maintain a clean and stable codebase  
- keep a documented history of changes and decisions  

PRs act as a checkpoint to make sure every change is safe and understood by the team.

---

## 2. What makes a well-structured PR?

A well-structured PR includes:

- **A clear title** — describes the purpose (e.g., “Add login API endpoint”).  
- **A short summary** — explains what changed and why.  
- **Small, focused changes** — not too many updates in one PR.  
- **Relevant links** — such as issues or discussions.  
- **Readable commit messages**.  
- **Passing tests** or confirmation that the change is safe.

A clean PR makes reviewing faster and helps avoid misunderstandings.

---

## 3. What did you learn from reviewing an open-source PR?

From reviewing an open-source PR, I learned that:

- Developers often explain the reason for the change clearly.  
- Reviewers leave comments, questions, and suggestions.  
- The PR may go through several updates before approval.  
- There is a strong focus on code quality and long-term maintainability.  
- Good communication is as important as good code.

I also saw how teams discuss different solutions and finally agree on the best approach.

---

## 4. Requesting feedback and merging PRs

I practiced creating a PR in my own repo:

- I created a new branch and pushed a small change.  
- I opened a PR with a clear title and description.  
- I reviewed my own code and checked the diff view.  
- After testing, I merged the PR and deleted the branch.

This helped me understand the full workflow from start to finish.

---
# Git Workflow Guide

Welcome to **CollabLab**!

This guide explains the Git and GitHub workflow every contributor must follow.

---

# Before You Start

Make sure you have:

* Git installed
* A GitHub account
* Access to the repository
* A code editor (e.g. VS Code)

---

# Step 1 — Clone the Repository

Clone the repository to your computer.

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/your-organization/collab-lab.git
```

Move into the project folder.

```bash
cd collab-lab
```

---

# Step 2 — Check the Remote Repository

Verify that your local repository is connected to GitHub.

```bash
git remote -v
```

Expected output:

```text
origin  https://github.com/your-organization/collab-lab.git (fetch)
origin  https://github.com/your-organization/collab-lab.git (push)
```

---

# Step 3 — Switch to the Main Branch

Always start from the latest version of the project.

```bash
git checkout main
```

---

# Step 4 — Get the Latest Changes

Before beginning any work, download the latest changes from GitHub.

```bash
git pull origin main
```

Do this **every time before you start working**.

---

# Step 5 — Create Your Branch

Never work directly on the `main` branch.

Create your own feature branch.

Task Manager

```bash
git checkout -b feature/task-manager
```

Calculator

```bash
git checkout -b feature/calculator
```

Quiz App

```bash
git checkout -b feature/quiz
```

Verify your current branch.

```bash
git branch
```

The active branch will have an asterisk (`*`).

Example:

```text
* feature/task-manager
  main
```

---

# Step 6 — Build Your Feature

Work only on the files assigned to you.

Do **not** modify another developer's lab unless instructed.

Save your work regularly.

---

# Step 7 — Check What Changed

See which files have been modified.

```bash
git status
```

---

# Step 8 — Stage Your Changes

Add your updated files.

Add everything:

```bash
git add .
```

Or add a specific file:

```bash
git add index.html
```

---

# Step 9 — Commit Your Changes

Write a meaningful commit message.

Examples:

```bash
git commit -m "feat: create todo layout"
```

```bash
git commit -m "feat: add calculator buttons"
```

```bash
git commit -m "fix: correct quiz score calculation"
```

```bash
git commit -m "style: improve card spacing"
```

Avoid messages like:

* update
* work
* done
* fix stuff
* final
* changes

Your commit message should clearly describe what changed.

---

# Step 10 — Push Your Branch

Push your branch to GitHub.

```bash
git push origin feature/task-manager
```

The first push may display instructions. Follow them if Git asks you to set the upstream branch.

---

# Step 11 — Open a Pull Request

Go to GitHub.

You should see a prompt to compare your branch with `main`.

Click:

**Compare & pull request**

Provide:

## Title

Use a short, descriptive title.

Example:

```text
Add task creation layout
```

## Description

Briefly explain:

* What you changed
* Why you changed it
* Anything that needs review

Then submit the Pull Request.

---

# Step 12 — Wait for Review

Do not merge your own Pull Request.

The project maintainer will:

* Review your code
* Approve it
* Request changes if needed
* Merge it into `main`

---

# Step 13 — If Changes Are Requested

Stay on your feature branch.

Make the requested changes.

Then repeat:

```bash
git add .
```

```bash
git commit -m "fix: address review comments"
```

```bash
git push
```

Your Pull Request will update automatically.

---

# Step 14 — After Your Pull Request Is Merged

Switch back to the main branch.

```bash
git checkout main
```

Download the latest version.

```bash
git pull origin main
```

Delete your old feature branch.

```bash
git branch -d feature/task-manager
```

---

# Daily Workflow Checklist

Every time you begin work:

```text
1. Open terminal

2. git checkout main

3. git pull origin main

4. git checkout feature/your-branch

5. Build your feature

6. git status

7. git add .

8. git commit -m "meaningful message"

9. git push origin feature/your-branch

10. Open or update Pull Request
```

---

# Common Git Commands

View current branch:

```bash
git branch
```

View status:

```bash
git status
```

View commit history:

```bash
git log --oneline
```

Switch branches:

```bash
git checkout branch-name
```

Fetch changes from GitHub:

```bash
git fetch origin
```

Pull latest changes:

```bash
git pull origin main
```

Push changes:

```bash
git push
```

---

# Team Rules

✅ Pull the latest changes from `main` before starting work.

✅ Work only on your assigned feature branch.

✅ Commit often with meaningful messages.

✅ Push your work regularly.

✅ Open a Pull Request for review.

✅ Wait for approval before your work is merged.

❌ Never push directly to `main`.

❌ Never merge your own Pull Request.

❌ Never delete another developer's work.

❌ Never ignore merge conflicts. Ask for help if you're unsure.

---

# Remember

A good Git workflow is about communication as much as code. Small commits, frequent pushes, and clear Pull Requests make collaboration easier for everyone.

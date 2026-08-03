# CollabLab Style Guide

This document defines the coding standards for the project.

---

# HTML

* Use semantic HTML elements.
* Indent using four spaces.
* Use lowercase element and attribute names.
* Include meaningful `alt` text for images.
* Avoid inline styles.

Example:

```html
<section class="hero">
    <div class="container">
        <h1>Learn Git. Build Together.</h1>
    </div>
</section>
```

---

# CSS

## Naming Convention

Use kebab-case.

Good:

```text
hero-section
primary-button
dashboard-card
```

Avoid:

```text
HeroSection
heroSection
hero_section
```

## Organization

Each CSS file should contain:

1. Section comment
2. Layout
3. Typography
4. Components
5. Responsive rules

Use CSS custom properties from `variables.css` instead of hard-coded colors whenever possible.

---

# JavaScript

* Use `const` by default.
* Use `let` only when reassignment is needed.
* Prefer arrow functions.
* Keep functions focused on one responsibility.
* Avoid global variables.

Example:

```javascript
const createCard = (project) => {
    // ...
};
```

---

# File Structure

Keep related files together.

Example:

```text
labs/
    task-manager/
        index.html
        style.css
        script.js
```

---

# Accessibility

* Use descriptive button text.
* Ensure sufficient color contrast.
* Support keyboard navigation where practical.
* Use proper heading hierarchy (`h1` → `h2` → `h3`).

---

# Responsive Design

Design mobile-first.

Recommended breakpoints:

* 576px
* 768px
* 992px
* 1200px

---

# General Principles

* Write readable code.
* Keep files organized.
* Reuse components instead of duplicating code.
* Comment only when the code is not self-explanatory.
* Leave the codebase cleaner than you found it.

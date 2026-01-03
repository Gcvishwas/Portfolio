# Personal Portfolio Website

A modern, responsive **personal portfolio website** built using **Vite + React + TypeScript + Tailwind CSS**.
This project is fully open-source and **anyone can fork, edit, and customize it** to create their own portfolio.

🔗 **Live Site:** 👉 <a href="https://vishwasgc.vercel.app/">Site</a>

---

## 📑 Table of Contents

* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Features](#features)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Customization Guide](#customization-guide)
* [Data Configuration](#data-configuration)
* [Limitations & Future Improvements](#limitations--future-improvements)
* [Contributing](#contributing)
* [License](#license)
* [Author](#author)

---

##📌 Overview

This portfolio website is designed to showcase personal projects, skills, and contact information in a clean and visually appealing way. It follows a **component-based architecture** and uses **TypeScript** for type safety and maintainability.

The project is beginner-friendly and ideal for students or developers who want a customizable portfolio template.

---

## 🛠 Tech Stack

* **Vite** – Fast build tool and development server
* **React** – UI library
* **TypeScript** – Static typing for better scalability
* **Tailwind CSS** – Utility-first CSS framework
* **Lucide Icons** – Icon library

---

## ✨ Features

* Responsive design for all screen sizes
* Dark / Light theme toggle
* Animated star & meteor background
* Skills and Projects managed via data files
* Clean and modular component structure
* Easy to customize and extend

---

## 📂 Project Structure

```
my-portfolio
├── node_modules
├── public
│   └── projects        # Project images and CV
├── src
│   ├── assets
│   ├── components
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── navbar.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── starbackground.tsx
│   │   └── ThemeToggle.tsx
│   ├── data
│   │   ├── project.ts
│   │   └── skill.ts
│   ├── lib
│   │   └── util.ts
│   ├── pages
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── Main.tsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone 

# Navigate into the project directory
cd 

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run on **[http://localhost:5173](http://localhost:5173)** by default.

---

## 🎨 Customization Guide

You can easily make this portfolio your own:

* Update **Hero, About, Skills, and Projects** components with your information
* Replace images and CV in the `public/projects` folder
* Modify colors and styles using **Tailwind CSS**
* Change routes or sections as needed

---

## 🌌 StarBackground Component

The `StarBackground` component provides animated **stars and meteors** for a visually appealing background.

* You can control the **number of stars and meteors** directly inside the component
* Animations are lightweight and optimized for performance

---

## 📊 Data Configuration

The `data` folder contains reusable data arrays:

* `skill.ts` → List of skills
* `project.ts` → List of projects

You can add, remove, or update items in these arrays without touching the UI components.

---

## ⚠️ Limitations & Future Improvements

* ❌ Contact form currently uses the traditional **HTML `mailto:` method**, which opens the user's email client
* 🔄 Future plan to integrate **EmailJS or another email service** for direct form submissions
* ⭐ A **Recommendations / Testimonials** section is planned for future versions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature-name`)
3. Commit your changes
4. Open a Pull Request

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 👤 Author

**Vishwas Gharti Chhetri**

---

⭐ If you like this project, consider giving it a star on GitHub!

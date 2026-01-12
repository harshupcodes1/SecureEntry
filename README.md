# 🔐 SecureEntry

SecureEntry is a modern authentication system that provides secure login,
registration, and logout functionality with a clean, animated, and
professional user interface.

This project combines strong authentication logic with a premium frontend
experience, making it suitable for real-world use and portfolio presentation.

---

## ✨ Key Features

- 🔑 User Login and Registration
- 🔐 JWT-based Authentication
- 🚪 Secure Logout Flow
- 🎨 Modern animated frontend UI
- 🧩 Clear frontend and backend separation
- ⚡ JavaScript only (No TypeScript)
- 📱 Fully responsive design

---

## 🛠 Tech Stack

Frontend:
- JavaScript (React + Vite)
- Tailwind CSS
- GSAP (Animations)
- Spline (3D Integration)

Backend:
- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)

---

## 📂 Project Structure

SecureEntry/
├── frontend/   # Client-side application
└── backend/    # Server-side authentication logic

---
## ▶️ How to Run the Project Locally

1️⃣ Clone the repository

```bash
git clone https://github.com/harshupcodes1/SecureEntry.git
cd SecureEntry
2️⃣ Start Backend Server
bash
Copy code
cd backend
npm install
npm run dev
Backend runs on:
http://localhost:5000

3️⃣ Start Frontend Application
bash
Copy code
cd frontend
npm install
npm run dev
Frontend runs on:
http://localhost:5173

🔐 Authentication Flow
User registers with name, email, and password

User logs in using credentials

Backend validates credentials and generates a JWT

JWT is stored on the client

Authenticated state allows access

Logout clears the token and redirects to login

🎯 Project Purpose
SecureEntry was built to:

Demonstrate real-world authentication workflows

Practice secure user access management

Showcase modern frontend animations and 3D visuals

Serve as a portfolio-ready authentication project

👤 Author
Harsh
Full-Stack Developer

⭐ Support
If you find this project helpful, consider giving it a ⭐ on GitHub.
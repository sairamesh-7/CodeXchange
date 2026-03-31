# ☁️ Serverless Cloud IDE with Real-Time Collaboration

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A scalable cloud-based Integrated Development Environment (IDE) with serverless architecture and real-time collaboration.**

Developers can **code, edit, execute, and share projects directly from a browser** — eliminating local setup and improving productivity.

> 🚀 Powered by **Docker containers**, **AI-assisted coding**, and **real-time synchronization**

</div>

---

## 🚀 Features

| # | Feature | Description |
|---|--------|------------|
| 1 | 👤 User Authentication | Secure token-based authentication with encrypted user data |
| 2 | 🤝 Real-Time Collaboration | Multiple users can edit simultaneously using WebSockets |
| 3 | 🐳 Docker Containerization | Secure isolated environments for executing code |
| 4 | 🤖 AI Code Assistance | Smart suggestions and auto-completion using AI APIs |
| 5 | ☁️ Serverless Backend | Auto-scalable backend using serverless architecture |
| 6 | 💻 Live Terminal & Preview | Interactive terminal with real-time output preview |
| 7 | 🗄️ Cloud Storage | Persistent storage using Cloudflare D1 & R2 |
| 8 | 🛡️ Security & Validation | Input validation and protection against attacks |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|----------|--------|
| Next.js / React | Frontend UI (App Router) |
| Node.js | Backend runtime |
| Docker | Containerized execution |
| Serverless APIs | Scalable backend processing |
| WebSockets | Real-time sync |
| Cloudflare D1 | Relational database (Drizzle ORM) |
| Cloudflare R2 | File storage |
| AI APIs | Code suggestions |

---

## 📂 Project Structure

```text
Serverless-Cloud-IDE/

├── backend/
│   ├── database/
│   │   ├── drizzle/
│   │   ├── drizzle.config.ts
│   │   └── wrangler.toml
│
│   ├── server/
│   │   ├── src/
│   │   │   ├── inactivity.ts
│   │   │   └── ratelimit.ts
│   │   └── dockerfile
│
│   └── storage/
│       └── wrangler.toml
│
└── frontend/
    ├── app/
    │   ├── (app)/code/
    │   └── (auth)/
    │
    ├── components/
    │   ├── dashboard/
    │   ├── editor/
    │   ├── layout/
    │   └── ui/
    │
    ├── lib/
    │   ├── ecs.ts
    │   └── types.ts
    │
    └── middleware.ts
⚙️ Installation
Prerequisites
Node.js (v18+)
Docker Desktop
Cloudflare Wrangler CLI
Steps
1️⃣ Clone the repository
git clone https://github.com/sairamesh-7/Serverless-Cloud-IDE.git
cd Serverless-Cloud-IDE
2️⃣ Install frontend dependencies
cd frontend
npm install
3️⃣ Install backend dependencies
cd ../backend/server
npm install
▶️ Run the Application
Start Backend
cd backend/server
npm run dev
Start Frontend
cd frontend
npm run dev
Open in browser
http://localhost:3000
📸 How It Works

1️⃣ User logs in securely
2️⃣ Creates a cloud workspace
3️⃣ Writes code in browser editor
4️⃣ Collaborates in real-time
5️⃣ Gets AI code suggestions
6️⃣ Executes code inside Docker
7️⃣ Files are saved in cloud storage

🔮 Future Improvements
Improve real-time sync performance
Add advanced AI models
Support more programming languages
Git integration
Built-in testing pipelines
Better container scaling
👨‍💻 Authors

Pragada Sai Ramesh
Mannam Arjun

Dept. of Networking & Communications
SRM Institute of Science and Technology, India

🐙 GitHub: https://github.com/sairamesh-7

📜 License

MIT License © 2026 sairamesh-7

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction.

<div align="center">

Made with ❤️ for developers worldwide 🌍

</div> ```

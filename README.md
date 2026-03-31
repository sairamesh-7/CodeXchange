# 🚀 Serverless Cloud IDE with Real-Time Collaboration  

<div align="center">

### ⚡ Code Anywhere. Collaborate Instantly. Scale Effortlessly.

![Frontend](https://img.shields.io/badge/Frontend-React%20%7C%20Next.js-blue?style=for-the-badge)
![Backend](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge)
![Cloud](https://img.shields.io/badge/Cloud-Cloudflare-F38020?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</div>

---

## ✨ Overview  

A **next-generation cloud-based IDE** that enables developers to **write, execute, and collaborate on code in real-time** — directly from the browser.  

No setup. No dependencies. Just code. ⚡  

> Built with **serverless architecture + Docker isolation + real-time sync**, making it scalable, secure, and collaboration-friendly.

---

## 🌟 Key Highlights  

- ⚡ **Zero Setup Development** – Start coding instantly  
- 🤝 **Real-Time Collaboration** – Multiple users, same code, live updates  
- 🐳 **Docker Execution Engine** – Secure sandboxed environments  
- 🤖 **AI Code Assistance** – Smart suggestions & auto-completion  
- ☁️ **Serverless Scalability** – Handles traffic automatically  
- 📂 **Cloud Storage (R2 + D1)** – Persistent and reliable  
- 🖥️ **Live Preview & Terminal** – Full coding experience in browser  

---

## 🧠 Architecture (High-Level)

```text
User → Frontend (Next.js)
     → WebSocket Server (Real-time sync)
     → Serverless APIs
     → Docker Containers (Code Execution)
     → Cloudflare D1 (Database)
     → Cloudflare R2 (Storage)
🛠️ Tech Stack
Category	Technologies
🎨 Frontend	Next.js, React, Tailwind CSS
⚙️ Backend	Node.js, WebSockets
🐳 Execution	Docker Containers
☁️ Cloud	Cloudflare Workers, D1, R2
🤖 AI	External AI APIs
🗄️ Database	Drizzle ORM + D1
📂 Project Structure
├── backend/
│   ├── server/
│   │   ├── .dockerignore
│   │   ├── .gitignore
│   │   ├── nodemon.json
│   │   ├── dockerfile
│   │   ├── src/
│   │   │   ├── inactivity.ts
│   │   │   └── ratelimit.ts
│   │   └── package.json
│   ├── database/
│   │   ├── drizzle/
│   │   │   ├── 0001_cool_solo.sql
│   │   │   ├── 0002_dizzy_mad_thinker.sql
│   │   │   ├── 0006_brown_senator_kelly.sql
│   │   │   ├── 0005_demonic_sheva_callister.sql
│   │   │   ├── 0003_curious_ego.sql
│   │   │   ├── 0004_bitter_overlord.sql
│   │   │   └── 0000_daffy_medusa.sql
│   │   ├── .prettierrc
│   │   ├── worker-configuration.d.ts
│   │   ├── .editorconfig
│   │   ├── test/
│   │   │   └── tsconfig.json
│   │   ├── drizzle.config.ts
│   │   ├── vitest.config.ts
│   │   └── wrangler.toml
│   ├── package.json
│   └── storage/
│       ├── .prettierrc
│       ├── worker-configuration.d.ts
│       ├── .editorconfig
│       ├── test/
│       │   └── tsconfig.json
│       ├── wrangler.toml
│       ├── vitest.config.ts
│       └── package.json
└── frontend/
    ├── .eslintrc.json
    ├── app/
    │   ├── favicon.ico
    │   ├── (app)/
    │   │   ├── code/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   └── (auth)/
    │       ├── layout.tsx
    │       ├── sign-in/
    │       │   └── [[...sign-in]]/
    │       │       └── page.tsx
    │       └── sign-up/
    │           └── [[...sign-up]]/
    │               └── page.tsx
    ├── next.config.mjs
    ├── postcss.config.js
    ├── public/
    │   ├── icons/
    │   ├── project-icons/
    │   │   └── more.svg
    │   └── vercel.svg
    ├── postcss.config.mjs
    ├── lib/
    │   ├── ecs.ts
    │   ├── types.ts
    │   └── colors.ts
    ├── components/
    │   ├── editor/
    │   │   ├── sidebar/
    │   │   │   └── types.ts
    │   │   └── live/
    │   │       └── room.tsx
    │   ├── layout/
    │   │   └── themeProvider.tsx
    │   ├── ui/
    │   │   ├── avatar.tsx
    │   │   ├── label.tsx
    │   │   ├── input.tsx
    │   │   └── sonner.tsx
    │   └── dashboard/
    │       ├── projectCard/
    │       │   └── index.tsx
    │       └── about.tsx
    ├── components.json
    ├── middleware.ts
    ├── .gitignore
    └── tsconfig.json
⚙️ Installation
🔧 Prerequisites
Node.js (v18+)
Docker
Cloudflare Wrangler CLI
🚀 Setup
# Clone repository
git clone https://github.com/sairamesh-7/Serverless-Cloud-IDE.git

# Navigate into project
cd Serverless-Cloud-IDE
📦 Install Dependencies
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend/server
npm install
▶️ Run Locally
# Start backend
cd backend/server
npm run dev

# Start frontend
cd frontend
npm run dev

🌐 Open your browser and go to:
http://localhost:3000

🔄 Workflow
1. Login 🔐
2. Create Project 📁
3. Write Code ✍️
4. Collaborate 🤝
5. AI Suggestions 🤖
6. Run Code 🐳
7. Save to Cloud ☁️
📸 Screenshots (Add Your Images Here)
![Editor](./screenshots/editor.png)
![Dashboard](./screenshots/dashboard.png)
![Collaboration](./screenshots/collab.png)
🚧 Future Enhancements
🔄 GitHub Integration (Version Control)
🌐 Multi-language Support
⚡ Performance Optimization
🧪 Built-in Testing Pipelines
🧠 Advanced AI Models
📊 Better Resource Scaling
👨‍💻 Authors

Pragada Sai Ramesh
Mannam Arjun

🎓 SRM Institute of Science and Technology

📜 License

MIT License © 2026 sairamesh-7

<div align="center">
🌍 Built for Developers, by Developers

⭐ Star this repo if you like it
🚀 Contributions are welcome!

</div> ```

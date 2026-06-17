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

| Feature | Description |
|---|---|
| ⚡ **Zero Setup Development** | Start coding instantly, no local install needed |
| 🤝 **Real-Time Collaboration** | Multiple users, same code, live updates |
| 🐳 **Docker Execution Engine** | Secure sandboxed environments per user |
| 🤖 **AI Code Assistance** | Smart suggestions & auto-completion |
| ☁️ **Serverless Scalability** | Handles traffic spikes automatically |
| 📂 **Cloud Storage (R2 + D1)** | Persistent, reliable file & data storage |
| 🖥️ **Live Preview & Terminal** | Full coding experience in the browser |

---

## 🧠 Architecture

```text
User
 └── Frontend (Next.js)
      ├── WebSocket Server      → Real-time collaboration sync
      ├── Serverless APIs       → Business logic (Cloudflare Workers)
      ├── Docker Containers     → Isolated code execution
      ├── Cloudflare D1         → Relational database (via Drizzle ORM)
      └── Cloudflare R2         → File & asset storage
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| 🎨 Frontend | Next.js, React, Tailwind CSS |
| ⚙️ Backend | Node.js, WebSockets |
| 🐳 Execution | Docker Containers |
| ☁️ Cloud | Cloudflare Workers, D1, R2 |
| 🤖 AI | External AI APIs |
| 🗄️ Database | Drizzle ORM + Cloudflare D1 |

---

## 📂 Project Structure

```
Serverless-Cloud-IDE/
├── backend/
│   ├── server/
│   │   ├── dockerfile
│   │   ├── nodemon.json
│   │   ├── src/
│   │   │   ├── inactivity.ts       # Auto-shutdown idle containers
│   │   │   └── ratelimit.ts        # API rate limiting logic
│   │   └── package.json
│   ├── database/
│   │   ├── drizzle/                # SQL migration files
│   │   ├── drizzle.config.ts
│   │   ├── vitest.config.ts
│   │   └── wrangler.toml
│   └── storage/
│       ├── wrangler.toml           # Cloudflare R2 config
│       └── package.json
└── frontend/
    ├── app/
    │   ├── (app)/
    │   │   ├── code/page.tsx       # Main IDE page
    │   │   └── layout.tsx
    │   └── (auth)/
    │       ├── sign-in/            # Clerk sign-in route
    │       └── sign-up/            # Clerk sign-up route
    ├── components/
    │   ├── editor/
    │   │   ├── sidebar/            # File explorer sidebar
    │   │   └── live/room.tsx       # LiveBlocks collaboration room
    │   ├── ui/                     # Reusable UI components
    │   └── dashboard/              # Dashboard & project cards
    ├── lib/
    │   ├── types.ts
    │   ├── ecs.ts
    │   └── colors.ts
    └── middleware.ts               # Auth middleware
```

---

## ⚙️ Installation

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/)
- [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

### 🚀 Setup

```bash
# Clone the repository
git clone https://github.com/sairamesh-7/Serverless-Cloud-IDE.git

# Navigate into the project
cd Serverless-Cloud-IDE
```

### 📦 Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend/server
npm install
```

### ▶️ Run Locally

```bash
# Start backend (in backend/server)
npm run dev

# Start frontend (in frontend)
npm run dev
```

🌐 Open your browser at: **http://localhost:3000**

---

## 🔄 Workflow

```
1. 🔐 Login          →  Authenticate via Clerk
2. 📁 Create Project →  Choose language & template
3. ✍️ Write Code     →  Full-featured browser editor
4. 🤝 Collaborate    →  Invite teammates, code together live
5. 🤖 AI Suggestions →  Get intelligent code completions
6. 🐳 Run Code       →  Execute in isolated Docker containers
7. ☁️ Save to Cloud  →  Persist files to Cloudflare R2
```

---

## 📸 Screenshots

> _Add your screenshots to the `/screenshots` folder and they will appear here._

| Editor | Dashboard | Collaboration |
|--------|-----------|---------------|
| ![Editor](./screenshots/editor.png) | ![Dashboard](./screenshots/dashboard.png) | ![Collaboration](./screenshots/collab.png) |

---

## 🚧 Roadmap

- [ ] 🔄 GitHub Integration (Version Control)
- [ ] 🌐 Multi-language Support Expansion
- [ ] ⚡ Performance Optimization
- [ ] 🧪 Built-in Testing Pipelines
- [ ] 🧠 Advanced AI Model Integration
- [ ] 📊 Better Resource Autoscaling

---

## 👨‍💻 Authors

<div align="center">

| Name | Role |
|------|------|
| **Pragada Sai Ramesh** | Developer |
| **Mannam Arjun** | Developer |

🎓 *SRM Institute of Science and Technology*

</div>

---

## 📜 License

```
MIT License © 2026 sairamesh-7
```

See [LICENSE](./LICENSE) for full details.

---

<div align="center">

🌍 **Built for Developers, by Developers**

⭐ Star this repo if you like it &nbsp;|&nbsp; 🚀 Contributions are welcome!

</div>

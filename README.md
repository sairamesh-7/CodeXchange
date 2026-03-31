# ☁️ Serverless Cloud IDE with Real-Time Collaboration

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A scalable Integrated Development Environment (IDE) on the cloud, serverless, and supporting real-time collaborative programming through Docker-based containerization.**

Developers can code, edit, execute, and share code directly via a web browser without the need for local setup, minimizing overhead and optimizing efficiency.

> 🚀 Features **Docker-based execution**, **AI-assisted coding**, and **Real-time synchronization** — transforming how distributed teams build software.

</div>

---

## 🚀 Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 👤 User Authentication | Secure token-based verification and encrypted storage for user identities. |
| 2 | 🤝 Real-Time Collaboration | Simultaneous interaction with the same codebase using instant synchronization via WebSockets. |
| 3 | 🐳 Docker Containerization | Isolated, secure execution environments for untrusted or user-generated code. |
| 4 | 🤖 AI Code Assistance | Smart recommendations and auto-complete technology via pre-existing API services. |
| 5 | ☁️ Serverless Backend | Automatic resource scalability based on demand, ensuring optimal utilization. |
| 6 | 💻 Live Terminal & Preview | Interactive code-based interface with access to a terminal and live project previews. |
| 7 | 🗄️ Cloud Storage Integration | Secure storage of project data and files using Cloudflare D1 databases and R2 object storage. |
| 8 | 🛡️ Data Validation | Input validation and code sanitization to prevent injection attacks and ensure security. |

---

## 🛠️ Technologies Used

| Technology         | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| Next.js / React    | Modern responsive frontend interface (App Router). |
| Node.js            | Backend runtime environment. |
| Docker             | Lightweight, isolated execution containers. |
| Serverless APIs    | Dynamic backend request processing and scaling. |
| WebSockets         | Real-time communication and state synchronization. |
| Cloudflare D1      | Relational database for user and project metadata managed via Drizzle ORM. |
| Cloudflare R2      | Cloud object storage for persisting file contents. |
| AI APIs            | Context-aware code generation and suggestions. |

---

## 📂 Project Structure

```text
Serverless-Cloud-IDE/
│
├── backend/                   # Backend services and infrastructure
│   ├── database/              # Cloudflare D1 & Drizzle ORM setup
│   │   ├── drizzle/           # SQL migration files
│   │   ├── drizzle.config.ts  # Drizzle configuration
│   │   └── wrangler.toml      # Cloudflare worker config for DB
│   │
│   ├── server/                # Core Node.js server (Dockerized)
│   │   ├── src/
│   │   │   ├── inactivity.ts  # Connection and inactivity handling
│   │   │   └── ratelimit.ts   # API rate limiting logic
│   │   └── dockerfile         # Docker container configuration
│   │
│   └── storage/               # Cloudflare R2 object storage setup
│       └── wrangler.toml      # Cloudflare worker config for storage
│
└── frontend/                  # Next.js Frontend Application
    ├── app/                   # App Router pages and layouts
    │   ├── (app)/code/        # Main IDE/Editor workspace page
    │   └── (auth)/            # Authentication routes (sign-in/sign-up)
    │
    ├── components/            # Reusable React components
    │   ├── dashboard/         # Dashboard UI and project cards
    │   ├── editor/            # Collaborative editor and live room logic
    │   ├── layout/            # Theme providers and global layouts
    │   └── ui/                # Base UI elements (avatar, input, etc.)
    │
    ├── lib/                   # Utility functions and shared definitions
    │   ├── ecs.ts             # Container/Execution service logic
    │   └── types.ts           # TypeScript type definitions
    │
    └── middleware.ts          # Next.js route middleware (e.g., auth guards)
⚙️ Installation
Prerequisites
Node.js (v18 or higher recommended)

Docker Desktop installed and running

Cloudflare Workers/Wrangler CLI (for backend deployment)

Steps
1. Clone the repository

Bash

git clone [https://github.com/sairamesh-7/Serverless-Cloud-IDE.git](https://github.com/sairamesh-7/Serverless-Cloud-IDE.git)
2. Navigate to the project folder

Bash

cd Serverless-Cloud-IDE
3. Install frontend dependencies

Bash

cd frontend
npm install
4. Install backend dependencies

Bash

cd ../backend/server
npm install
(Note: You may also need to run npm install inside the database and storage directories depending on your setup).

▶️ Run the Application
1. Start the backend server

Bash

cd backend/server
npm run dev
2. Start the frontend application

Bash

cd frontend
npm run dev
Open your browser and navigate to:

http://localhost:3000/
📸 How It Works
Step 1 → User Login: Authenticate using a secure token mechanism.
Step 2 → Create Project: Initialize a workspace in the cloud environment.
Step 3 → Write Code: Type in the browser editor; changes are tracked instantly.
Step 4 → Collaborate: Share the workspace; WebSockets sync live updates across clients.
Step 5 → AI Assistance: Request smart code suggestions powered by AI APIs.
Step 6 → Execute Code: Run the project; instructions are processed securely inside Docker.
Step 7 → Cloud Storage: Save files directly to persisted cloud object storage.
🔮 Future Improvements
[ ] Optimize synchronization algorithms to reduce minor delays during extreme workloads.

[ ] Integrate more advanced, domain-specific AI models to improve contextual accuracy.

[ ] Add support for additional programming languages and communities.

[ ] Implement advanced features like version control systems (Git integration).

[ ] Build automated testing pipelines directly into the IDE environment.

[ ] Refine resource allocation approaches for container instantiation under heavy loads.

👨‍💻 Authors
Dr. N. Senthamarai
Pragada Sai Ramesh
Mannam Arjun
Dept of Networking And Communications, SRM Institute of Science and Technology, Kattankulathur, India

🐙 GitHub: @sairamesh-7

📜 License
MIT License

Copyright (c) 2026 sairamesh-7

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
<div align="center">
Made with ❤️ for developers collaborating worldwide 🌍
</div>

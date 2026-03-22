# 💻 CodeXchange

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Serverless Cloud IDE for Real-Time Collaboration Using Docker**

A cloud-based collaborative programming platform that allows multiple users to write, edit, run, and share code in real time — directly from the browser, with no local setup required.

[Features](#-key-features) • [Architecture](#-system-architecture) • [Tech Stack](#-technology-stack) • [Project Structure](#-project-structure) • [Installation](#-installation) • [Workflow](#-system-workflow) • [License](#-license)

</div>

---

## 📌 Overview

Traditional development environments require manual installation, complex configuration, and the use of multiple disconnected tools for coding, storage, and collaboration. These limitations increase setup time and reduce productivity — especially for remote teams and students.

**CodeXchange** solves these problems by providing a unified cloud platform where developers can create projects, collaborate with team members, and manage code entirely from the browser. The system integrates secure authentication, real-time collaboration, cloud storage, and AI-powered coding assistance into a single seamless experience.

---

## ✨ Key Features

| # | Feature | Description |
|---|---------|-------------|
| 1 | 🤝 Real-Time Collaboration | Multiple users can write and edit code simultaneously |
| 2 | ☁️ Cloud-Based Environment | Full development environment in the browser — no local install needed |
| 3 | 🤖 AI Code Assistance | Intelligent code suggestions powered by AI integration |
| 4 | 🔐 Secure Authentication | User login and access control via Clerk Authentication |
| 5 | 📁 Project Management | Create, organize, and manage multiple coding projects |
| 6 | 🔗 Project Sharing | Share projects and control access for collaborators |
| 7 | ⚡ Serverless Backend | Cloudflare Workers for fast, scalable, serverless APIs |
| 8 | 🗄️ Cloud Storage | Project files stored securely in Cloudflare R2 |
| 9 | 📊 AI Usage Tracking | Tracks AI generation usage per user account |
| 10 | 🌐 Scalable Infrastructure | Supports multiple concurrent users and projects |

---

## 🏗️ System Architecture

The platform follows a **Serverless Microservices Architecture** with the following core components:

```
┌─────────────────────────────────────────────────┐
│                   FRONTEND                       │
│    Next.js · React · Tailwind · Liveblocks       │
│    Browser-based editor, dashboard, terminal     │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│                   BACKEND                        │
│         Cloudflare Workers (Serverless)          │
│   Project management · Collaboration · Auth API  │
└──────┬──────────────┬──────────────┬────────────┘
       │              │              │
┌──────▼──────┐ ┌─────▼──────┐ ┌────▼───────────┐
│  DATABASE   │ │  STORAGE   │ │   AI SERVICE   │
│Cloudflare D1│ │Cloudflare  │ │  Code suggest- │
│ (SQLite)    │ │    R2      │ │  ions & assist │
└─────────────┘ └────────────┘ └────────────────┘
```

---

## 🗄️ Database Design

The system uses a **relational database** (Cloudflare D1 / SQLite) with the following core tables:

### `User` Table — Stores user account information

| Field | Type | Description |
|---|---|---|
| id | string | Unique user identifier |
| name | string | Display name |
| email | string | User email address |
| image | string | Profile picture URL |
| generations | integer | AI usage count |

### `Virtualbox` Table — Stores user project details

| Field | Type | Description |
|---|---|---|
| id | string | Unique project identifier |
| name | string | Project name |
| type | string | Project type (node / python / react) |
| user_id | string | Owner reference |
| visibility | string | Public or private |

### `Users_to_Virtualboxes` Table — Handles project sharing

| Field | Type | Description |
|---|---|---|
| userId | string | Shared user reference |
| virtualboxId | string | Project reference |
| sharedOn | datetime | Date of sharing |

---

## 🔗 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | React / Next.js 14 | Web UI and routing |
| Styling | Tailwind CSS | Utility-first styling |
| Real-time | Liveblocks | Collaborative cursors and presence |
| Backend | Cloudflare Workers | Serverless API layer |
| Database | Cloudflare D1 (SQLite) | User and project metadata |
| Storage | Cloudflare R2 | Project file storage |
| Auth | Clerk Authentication | Secure user login and sessions |
| ORM | Drizzle ORM | Type-safe database queries |
| AI | AI API | Code suggestions and assistance |
| Language | TypeScript | End-to-end type safety |
| Containerization | Docker | Server containerization |

---

## 📂 Project Structure

```
Minorproject/
│
├── LICENSE
│
├── backend/
│   ├── package.json
│   │
│   ├── database/                        # Cloudflare D1 database worker
│   │   ├── drizzle.config.ts            # Drizzle ORM configuration
│   │   ├── wrangler.toml                # Cloudflare worker config
│   │   ├── drizzle/                     # SQL migration files
│   │   │   ├── 0000_daffy_medusa.sql
│   │   │   ├── 0001_cool_solo.sql
│   │   │   ├── ...
│   │   │   └── meta/                    # Migration snapshots & journal
│   │   ├── src/
│   │   │   ├── index.ts                 # Worker entry point
│   │   │   └── schema.ts                # Drizzle database schema
│   │   └── test/
│   │       └── index.spec.ts            # Database unit tests
│   │
│   ├── server/                          # Main backend server
│   │   ├── dockerfile                   # Docker container setup
│   │   ├── nodemon.json                 # Dev auto-reload config
│   │   ├── src/
│   │   │   ├── index.ts                 # Server entry point
│   │   │   ├── getVirtualboxFiles.ts    # Fetch project files logic
│   │   │   ├── inactivity.ts            # Inactivity timeout handler
│   │   │   ├── ratelimit.ts             # API rate limiting
│   │   │   ├── types.ts                 # Shared TypeScript types
│   │   │   └── utils.ts                 # Utility functions
│   │   └── projects/                    # Active project sandboxes (runtime)
│   │
│   └── storage/                         # Cloudflare R2 storage worker
│       ├── wrangler.toml                # Cloudflare worker config
│       ├── src/
│       │   ├── index.ts                 # Storage worker entry point
│       │   └── startercode.ts           # Starter code templates
│       └── test/
│           └── index.spec.ts            # Storage unit tests
│
└── frontend/                            # Next.js web application
    ├── next.config.mjs                  # Next.js configuration
    ├── tailwind.config.ts               # Tailwind CSS config
    ├── liveblocks.config.ts             # Liveblocks real-time config
    ├── middleware.ts                    # Auth and routing middleware
    │
    ├── app/
    │   ├── layout.tsx                   # Root layout
    │   ├── page.tsx                     # Landing page
    │   ├── (app)/                       # Authenticated app routes
    │   │   ├── code/                    # Code editor pages
    │   │   │   ├── page.tsx
    │   │   │   └── [id]/page.tsx        # Dynamic project editor
    │   │   └── dashboard/
    │   │       └── page.tsx             # User dashboard
    │   ├── (auth)/                      # Auth routes
    │   │   ├── sign-in/                 # Clerk sign-in page
    │   │   └── sign-up/                 # Clerk sign-up page
    │   └── api/
    │       └── lib-auth/route.ts        # Auth API handler
    │
    ├── components/
    │   ├── dashboard/                   # Dashboard UI components
    │   │   ├── index.tsx
    │   │   ├── about.tsx
    │   │   ├── projects.tsx
    │   │   ├── newProject.tsx
    │   │   ├── shared.tsx
    │   │   ├── navbar/                  # Dashboard navigation bar
    │   │   └── projectCard/             # Project card with dropdown
    │   │
    │   ├── editor/                      # Code editor components
    │   │   ├── index.tsx                # Main editor layout
    │   │   ├── generate.tsx             # AI code generation panel
    │   │   ├── live/                    # Real-time collaboration
    │   │   │   ├── avatars.tsx          # Live user avatars
    │   │   │   ├── cursors.tsx          # Shared live cursors
    │   │   │   ├── room.tsx             # Liveblocks room wrapper
    │   │   │   └── disableModel.tsx
    │   │   ├── navbar/                  # Editor navigation bar
    │   │   │   ├── index.tsx
    │   │   │   ├── edit.tsx
    │   │   │   ├── share.tsx
    │   │   │   └── sharedUser.tsx
    │   │   ├── preview/                 # Code preview panel
    │   │   ├── sidebar/                 # File explorer sidebar
    │   │   │   ├── index.tsx
    │   │   │   ├── file.tsx
    │   │   │   ├── folder.tsx
    │   │   │   └── new.tsx
    │   │   └── terminal/                # In-browser terminal
    │   │       └── index.tsx
    │   │
    │   ├── layout/
    │   │   └── themeProvider.tsx        # Dark/light theme provider
    │   │
    │   └── ui/                          # Reusable shadcn/ui components
    │       ├── button.tsx
    │       ├── dialog.tsx
    │       ├── input.tsx
    │       ├── card.tsx
    │       └── ...
    │
    ├── lib/
    │   ├── actions.ts                   # Server actions
    │   ├── types.ts                     # Shared types
    │   ├── colors.ts                    # Color utilities
    │   ├── ecs.ts                       # ECS integration helpers
    │   └── utils.ts                     # General utility functions
    │
    └── public/
        ├── icons/                       # 578 SVG language icons
        └── project-icons/               # Project type icons (node, python, react)
```

---

## ⚙️ Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Cloudflare account (for Workers, D1, R2)
- Clerk account (for authentication)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/sairamesh-7/CodeXchange.git
cd CodeXchange
```

**2. Install frontend dependencies**
```bash
cd frontend
npm install
```

**3. Configure environment variables**
```bash
cp .env.local.example .env.local
# Fill in your Clerk, Cloudflare, and AI API keys
```

**4. Install backend dependencies**
```bash
cd ../backend/server
npm install

cd ../database
npm install

cd ../storage
npm install
```

**5. Run database migrations**
```bash
cd backend/database
npx drizzle-kit migrate
```

**6. Start the development server**
```bash
# Terminal 1 — Frontend
cd frontend
npm run dev

# Terminal 2 — Backend server
cd backend/server
npm run dev
```

**7. Open in browser**
```
http://localhost:3000
```

---

## 🔄 System Workflow

```
Step 1 → User signs in via Clerk secure authentication
Step 2 → User creates a new project workspace (Virtualbox)
Step 3 → Code is written and edited directly in the browser editor
Step 4 → User invites collaborators — shared access is managed via database
Step 5 → AI assists with real-time code suggestions and improvements
Step 6 → All project files are stored securely in Cloudflare R2
Step 7 → Multiple users collaborate simultaneously with live cursors and presence
```

---

## 🌍 Sustainable Development Goals (SDG)

This project contributes to the United Nations Sustainable Development Goals:

| SDG | Goal | Contribution |
|---|---|---|
| 🎓 SDG 4 | Quality Education | Provides accessible development environments for students and learners worldwide |
| 🏗️ SDG 9 | Industry, Innovation & Infrastructure | Promotes cloud-based software development and modern digital infrastructure |

---

## 👨‍💻 Contributors

**Pragada Sai Ramesh**
B.Tech Student — SRM University

- 🐙 GitHub: [@sairamesh-7](https://github.com/sairamesh-7)

---

## 📜 License

```
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
```

---

<div align="center">
  Built with ☁️ on Cloudflare · Powered by AI · Made for Developers
</div>

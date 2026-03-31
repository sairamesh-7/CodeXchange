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
    ├── server/
    │   ├── .dockerignore
    │   ├── .gitignore
    │   ├── nodemon.json
    │   ├── dockerfile
    │   ├── src/
    │   │   ├── inactivity.ts
    │   │   └── ratelimit.ts
    │   └── package.json
    ├── database/
    │   ├── drizzle/
    │   │   ├── 0001_cool_solo.sql
    │   │   ├── 0002_dizzy_mad_thinker.sql
    │   │   ├── 0006_brown_senator_kelly.sql
    │   │   ├── 0005_demonic_sheva_callister.sql
    │   │   ├── 0003_curious_ego.sql
    │   │   ├── 0004_bitter_overlord.sql
    │   │   └── 0000_daffy_medusa.sql
    │   ├── .prettierrc
    │   ├── worker-configuration.d.ts
    │   ├── .editorconfig
    │   ├── test/
    │   │   └── tsconfig.json
    │   ├── drizzle.config.ts
    │   ├── vitest.config.ts
    │   └── wrangler.toml
    ├── package.json
    └── storage/
    │   ├── .prettierrc
    │   ├── worker-configuration.d.ts
    │   ├── .editorconfig
    │   ├── test/
    │       └── tsconfig.json
    │   ├── wrangler.toml
    │   ├── vitest.config.ts
    │   └── package.json
└── frontend/
    ├── .eslintrc.json
    ├── app/
        ├── favicon.ico
        ├── (app)/
        │   ├── code/
        │   │   └── page.tsx
        │   └── layout.tsx
        └── (auth)/
        │   ├── layout.tsx
        │   ├── sign-in/
        │       └── [[...sign-in]]/
        │       │   └── page.tsx
        │   └── sign-up/
        │       └── [[...sign-up]]/
        │           └── page.tsx
    ├── next.config.mjs
    ├── postcss.config.js
    ├── public/
        ├── icons/
        │   ├── file_type_matlab.png
        │   ├── file_type_wallaby.svg
        │   ├── default_file.svg
        │   ├── default_folder.svg
        │   ├── file_type_c2.svg
        │   ├── file_type_erb.svg
        │   ├── file_type_volt.svg
        │   ├── file_type_bolt.svg
        │   ├── file_type_vscode.svg
        │   ├── file_type_diff.svg
        │   ├── file_type_puppet.svg
        │   ├── default_folder_opened.svg
        │   ├── file_type_kite.svg
        │   ├── file_type_vsix.svg
        │   ├── file_type_vscode2.svg
        │   ├── file_type_fsharp.svg
        │   ├── file_type_light_kite.svg
        │   ├── file_type_light_vsix.svg
        │   ├── file_type_riot.svg
        │   ├── file_type_vue.svg
        │   ├── file_type_cpp2.svg
        │   ├── file_type_light_gamemaker2.svg
        │   ├── file_type_nuxt.svg
        │   ├── default_root_folder.svg
        │   ├── file_type_light_codeclimate.svg
        │   ├── file_type_gamemaker2.svg
        │   ├── file_type_xml.svg
        │   ├── file_type_xsl.svg
        │   ├── file_type_npm.svg
        │   ├── file_type_procfile.svg
        │   ├── folder_type_vscode.svg
        │   ├── folder_type_vscode_test.svg
        │   ├── file_type_ionic.svg
        │   ├── file_type_codeclimate.svg
        │   ├── folder_type_private.svg
        │   ├── file_type_shaderlab.svg
        │   ├── file_type_cheader.svg
        │   ├── file_type_light_shaderlab.svg
        │   ├── file_type_circleci.svg
        │   ├── file_type_shell.svg
        │   ├── file_type_t4tt.svg
        │   ├── file_type_bazel.svg
        │   ├── file_type_idris.svg
        │   ├── file_type_light_circleci.svg
        │   ├── file_type_eslint2.svg
        │   ├── file_type_openHAB.svg
        │   ├── folder_type_plugin.svg
        │   ├── file_type_gamemaker.svg
        │   ├── file_type_wasm.svg
        │   ├── file_type_light_openHAB.svg
        │   ├── file_type_erlang.svg
        │   ├── file_type_angular.svg
        │   ├── file_type_raml.svg
        │   ├── default_root_folder_opened.svg
        │   ├── file_type_sln.svg
        │   ├── file_type_elm.svg
        │   ├── file_type_image.svg
        │   ├── file_type_karma.svg
        │   ├── file_type_typo3.svg
        │   ├── folder_type_vscode_opened.svg
        │   ├── file_type_crystal.svg
        │   ├── file_type_fsharp2.svg
        │   ├── folder_type_circleci.svg
        │   ├── folder_type_vscode_test_opened.svg
        │   ├── file_type_light_crystal.svg
        │   ├── file_type_racket.svg
        │   ├── file_type_view.svg
        │   ├── file_type_light_mlang.svg
        │   ├── file_type_audio.svg
        │   ├── file_type_autoit.svg
        │   ├── file_type_drone.svg
        │   ├── file_type_mlang.svg
        │   ├── file_type_edge.svg
        │   ├── file_type_light_drone.svg
        │   ├── file_type_sbt.svg
        │   ├── file_type_vb.svg
        │   ├── file_type_eslint.svg
        │   ├── file_type_freemarker.svg
        │   ├── file_type_markdown.svg
        │   ├── file_type_vhdl.svg
        │   ├── file_type_buckbuild.svg
        │   ├── file_type_terraform.svg
        │   ├── folder_type_private_opened.svg
        │   ├── file_type_ensime.svg
        │   ├── file_type_haskell.svg
        │   ├── folder_type_images.svg
        │   ├── file_type_appveyor.svg
        │   ├── file_type_erlang2.svg
        │   ├── file_type_progress.svg
        │   ├── folder_type_plugin_opened.svg
        │   ├── file_type_silverstripe.svg
        │   ├── file_type_applescript.svg
        │   ├── file_type_light_purescript.svg
        │   ├── folder_type_vs.svg
        │   ├── folder_type_vscode2.svg
        │   ├── file_type_text.svg
        │   ├── file_type_q.svg
        │   ├── folder_type_vscode_test2.svg
        │   ├── file_type_edge2.svg
        │   ├── file_type_light_todo.svg
        │   ├── file_type_solidity.svg
        │   ├── file_type_todo.svg
        │   ├── folder_type_circleci_opened.svg
        │   ├── file_type_codekit.svg
        │   ├── folder_type_audio.svg
        │   ├── folder_type_temp.svg
        │   ├── file_type_reason.svg
        │   ├── file_type_slice.svg
        │   ├── file_type_git2.svg
        │   ├── file_type_nim.svg
        │   ├── file_type_django.svg
        │   ├── file_type_favicon.svg
        │   ├── file_type_haskell2.svg
        │   ├── file_type_registry.svg
        │   ├── file_type_git.svg
        │   ├── file_type_js.svg
        │   ├── file_type_light_io.svg
        │   ├── file_type_jupyter.svg
        │   ├── file_type_protractor.svg
        │   ├── file_type_light_js.svg
        │   ├── folder_type_view.svg
        │   ├── file_type_c.svg
        │   ├── folder_type_images_opened.svg
        │   ├── folder_type_include.svg
        │   ├── file_type_io.svg
        │   ├── file_type_elm2.svg
        │   ├── file_type_storybook.svg
        │   ├── file_type_js_official.svg
        │   ├── file_type_csharp.svg
        │   ├── folder_type_vs_opened.svg
        │   ├── file_type_purescript.svg
        │   ├── file_type_wercker.svg
        │   ├── folder_type_temp_opened.svg
        │   ├── folder_type_vscode2_opened.svg
        │   ├── file_type_light_solidity.svg
        │   ├── file_type_elastic.svg
        │   ├── folder_type_vscode_test2_opened.svg
        │   ├── file_type_processinglang.svg
        │   ├── folder_type_audio_opened.svg
        │   ├── file_type_julia.svg
        │   ├── file_type_webpack.svg
        │   ├── file_type_cabal.svg
        │   ├── folder_type_js.svg
        │   ├── folder_type_git.svg
        │   ├── file_type_coveralls.svg
        │   ├── file_type_gitlab.svg
        │   ├── file_type_al.svg
        │   ├── file_type_dal.svg
        │   ├── file_type_jshint.svg
        │   ├── file_type_light_cabal.svg
        │   ├── file_type_cakephp.svg
        │   ├── file_type_ai.svg
        │   ├── file_type_galen.svg
        │   ├── folder_type_view_opened.svg
        │   ├── file_type_haxe.svg
        │   ├── file_type_kitchenci.svg
        │   ├── file_type_lisp.svg
        │   ├── folder_type_include_opened.svg
        │   ├── file_type_layout.svg
        │   ├── file_type_livescript.svg
        │   ├── folder_type_gitlab.svg
        │   ├── file_type_velocity.svg
        │   ├── folder_type_public.svg
        │   ├── file_type_light_codacy.svg
        │   ├── file_type_floobits.svg
        │   ├── file_type_kotlin.svg
        │   ├── file_type_sketch.svg
        │   ├── file_type_flash.svg
        │   ├── file_type_swift.svg
        │   ├── file_type_cppheader.svg
        │   ├── file_type_nginx.svg
        │   ├── file_type_map.svg
        │   ├── file_type_prometheus.svg
        │   ├── folder_type_webpack.svg
        │   ├── file_type_ng_pipe_js.svg
        │   ├── file_type_ng_guard_js.svg
        │   ├── file_type_ng_module_js.svg
        │   ├── file_type_ng_routing_js.svg
        │   ├── file_type_ng_service_js.svg
        │   ├── file_type_qsharp.svg
        │   ├── file_type_ng_component_js.svg
        │   ├── file_type_ng_directive_js.svg
        │   ├── folder_type_js_opened.svg
        │   ├── file_type_cpp.svg
        │   ├── file_type_ejs.svg
        │   ├── file_type_gradle.svg
        │   ├── file_type_ng_interceptor_js.svg
        │   ├── folder_type_git_opened.svg
        │   ├── folder_type_github.svg
        │   ├── file_type_dependencies.svg
        │   ├── file_type_fbx.svg
        │   ├── file_type_qlikview.svg
        │   ├── file_type_ini.svg
        │   ├── file_type_kos.svg
        │   ├── file_type_meteor.svg
        │   ├── folder_type_nginx.svg
        │   ├── file_type_config.svg
        │   ├── file_type_outlook.svg
        │   ├── file_type_saltstack.svg
        │   ├── file_type_light_ini.svg
        │   ├── file_type_light_rubocop.svg
        │   ├── file_type_nodemon.svg
        │   ├── file_type_stata.svg
        │   ├── file_type_light_config.svg
        │   ├── folder_type_template.svg
        │   ├── file_type_tfs.svg
        │   ├── folder_type_gitlab_opened.svg
        │   ├── file_type_textile.svg
        │   ├── file_type_elasticbeanstalk.svg
        │   ├── file_type_htmlhint.svg
        │   ├── folder_type_meteor.svg
        │   ├── file_type_objectivec.svg
        │   ├── file_type_cf.svg
        │   ├── file_type_storyboard.svg
        │   ├── file_type_yarn.svg
        │   ├── folder_type_config.svg
        │   ├── file_type_codacy.svg
        │   ├── file_type_html.svg
        │   ├── file_type_rubocop.svg
        │   ├── file_type_typescript.svg
        │   ├── folder_type_webpack_opened.svg
        │   ├── file_type_manifest.svg
        │   ├── file_type_source.svg
        │   ├── file_type_php3.svg
        │   ├── folder_type_light_meteor.svg
        │   ├── folder_type_src.svg
        │   ├── file_type_apib.svg
        │   ├── file_type_apib2.svg
        │   ├── file_type_dartlang.svg
        │   ├── file_type_docpad.svg
        │   ├── file_type_ng_pipe_ts.svg
        │   ├── file_type_ng_guard_ts.svg
        │   ├── file_type_ng_module_ts.svg
        │   ├── file_type_ng_routing_ts.svg
        │   ├── file_type_ng_service_ts.svg
        │   ├── file_type_typescriptdef.svg
        │   ├── folder_type_github_opened.svg
        │   └── file_type_excel.svg
        ├── project-icons/
        │   └── more.svg
        └── vercel.svg
    ├── postcss.config.mjs
    ├── lib/
        ├── ecs.ts
        ├── types.ts
        └── colors.ts
    ├── components/
        ├── editor/
        │   ├── sidebar/
        │   │   └── types.ts
        │   └── live/
        │   │   └── room.tsx
        ├── layout/
        │   └── themeProvider.tsx
        ├── ui/
        │   ├── avatar.tsx
        │   ├── label.tsx
        │   ├── input.tsx
        │   └── sonner.tsx
        └── dashboard/
        │   ├── projectCard/
        │       └── index.tsx
        │   └── about.tsx
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

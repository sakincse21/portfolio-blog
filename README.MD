# 🚀 Saleheen Uddin Sakin – Portfolio & Blog

A full-stack **personal portfolio and blogging platform** built with **Next.js (frontend)** and **Express.js + Prisma (backend)**.  
It includes an admin dashboard to manage **projects** and **blogs**, while also showcasing your **skills, experiences, and featured works**.

---

## 🌐 Live Deployment

🔗 **Frontend:** [https://portfolio-blog-frontend-sigma.vercel.app/](https://portfolio-blog-frontend-sigma.vercel.app/)  
🔗 **Backend API:** [https://portfolio-blog-ten-bay.vercel.app/](https://portfolio-blog-ten-bay.vercel.app/)

---

## 🧠 Project Overview

This project serves as both a **personal portfolio** and a **content management platform**.  
It allows visitors to read your blogs, view your featured projects, and contact you — while providing an admin dashboard for you to:

- Manage blogs (CRUD operations)
- Add or edit portfolio projects
- Track analytics (views, featured stats)
- Control featured posts/projects visibility

---

## ✨ Features

### 🧩 Frontend (Next.js)
- Built with **Next.js 15 + TypeScript + Tailwind CSS**
- **App Router** structure with separate `(public)` and `(admin)` routes
- **Light/Dark mode** with `next-themes`
- Responsive **portfolio sections** (About, Projects, Blogs, Contact)
- Dynamic **blog detail pages** with Markdown rendering
- **Admin Dashboard**:
  - Create, Edit, Delete Blogs & Projects
  - Blog & Project Tables with pagination
- **UI Components** using **shadcn/ui**
- Smooth animations with **Framer Motion**
- **Toast notifications** and form validation via **React Hook Form + Zod**

### ⚙️ Backend (Express + Prisma)
- **TypeScript**-based REST API using **Express.js**
- **PostgreSQL** + **Prisma ORM**
- **JWT authentication** with cookies
- **Admin seeding** for first-time setup
- CRUD APIs for:
  - `/auth/login`
  - `/user` (Admin only)
  - `/blogs` (Public + Admin CRUD)
  - `/projects` (Public + Admin CRUD)
- **Zod validation** middleware for request schema
- Secure **role-based access control**
- Ready for **Vercel deployment**

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS 4, ShadCN/UI, Framer Motion, React Hook Form, Zod |
| **Backend** | Node.js, Express.js 5, Prisma ORM, PostgreSQL, TypeScript |
| **Authentication** | JWT + Cookies |
| **Deployment** | Vercel (frontend & backend) |
| **Others** | ESLint, Prettier, dotenv, bcrypt, cors, compression |

---

## ⚙️ Setup Instructions

### 📂 Clone the Repository

```bash
git clone https://github.com/sakincse21/portfolio-blog.git
cd portfolio-blog
```

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

**Environment Variables (`frontend/.env.local`):**
```bash
NEXT_PUBLIC_BACKEND_URL=link
```

Frontend runs at: **http://localhost:3000**

---

### 🧩 Backend Setup

```bash
cd backend
npm install
```

**Environment Variables (`backend/.env`):**
```bash
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
BCRYPT_SALT_ROUND=10
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=1d
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:3000
```

Run migrations & seed admin:

```bash
npx prisma migrate dev
npm run dev
```

Backend runs at: **http://localhost:5000/**

---

## 📁 Folder Structure

```
sakincse21-portfolio-blog/
├── frontend/        # Next.js frontend
│   ├── src/
│   │   ├── app/     # App router structure (public/admin)
│   │   ├── modules/ # Reusable feature modules
│   │   └── components/ui/ # Shared UI components (ShadCN)
│   ├── next.config.ts
│   └── package.json
│
└── backend/         # Express + Prisma API
    ├── src/
    │   ├── modules/ # user, auth, post, project modules
    │   ├── configs/ # db, env setup
    │   ├── utils/   # helper utilities
    │   └── routes/  # unified router
    ├── prisma/      # schema & migrations
    └── package.json
```

---

## 🚀 Deployment Notes

- Both **frontend** and **backend** can be deployed separately to **Vercel**.
- Use `vercel.json` in backend to configure routes.
- Ensure CORS in backend allows your frontend domain (`FRONTEND_URL`).
- Use HTTPS for production cookies.

---

## 🔐 API Routes Overview

| Method | Endpoint | Description | Auth |
|--------|-----------|--------------|------|
| POST | `/api/v1/auth/login` | Admin login | Public |
| GET | `/api/v1/blogs` | Get all blogs | Public |
| POST | `/api/v1/blogs` | Create blog | Admin |
| PATCH | `/api/v1/blogs/:id` | Update blog | Admin |
| DELETE | `/api/v1/blogs/:id` | Delete blog | Admin |
| GET | `/api/v1/projects` | Get all projects | Public |
| POST | `/api/v1/projects` | Create project | Admin |
| GET | `/api/v1/user` | Get all users | Admin |
| GET | `/api/v1/user/me` | Get logged-in admin | Admin |

---

## 👨‍💻 Author

**Saleheen Uddin Sakin**  
🎓 3rd Year CSE Student at KUET  
🌐 GitHub: [sakincse21](https://github.com/sakincse21)  
📧 Email: saleheen.sakin@gmail.com  

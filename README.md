# 🌍 HopeForward — NGO Full-Stack Web App

A modern MERN + TypeScript web app for NGOs, featuring a public home page, volunteer registration, and admin panel.

## 🚀 Live Demo

> 🔗 [Live Site](https://ngo-website-mu-seven.vercel.app/)

> 🛠 [API Backend](https://ngo-website-backend-vo8e.onrender.com)

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, TypeScript, MongoDB Atlas
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📦 Project Structure

```
ngo-website/
├── backend/   # Express + MongoDB
├── frontend/  # React + Tailwind
└── README.md
```

## ⚡ Quick Start

```bash
git clone https://github.com/deepakpatil26/ngo-website.git
cd ngo-website
```

**Frontend**

```bash
cd frontend
npm install
npm start
```

**Backend**

```bash
cd backend
npm install
npm run dev
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
```

## 🌐 Deployment

**Backend (Render):**

- Build: `cd backend && npm install && npm run build`
- Start: `cd backend && npm start`
- Add env vars: `PORT`, `MONGO_URI`

**Frontend (Vercel):**

- Set root to `/frontend`
- Add env var: `REACT_APP_API_BASE_URL=https://ngo-website-backend-vo8e.onrender.com`

## 🤝 Contributing

Open issues, suggest features, or submit PRs!

---

Built with ❤️ by Deepak

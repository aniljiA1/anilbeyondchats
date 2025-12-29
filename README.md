🚀 BeyondChats – Full Stack Article Platform

A full-stack web application that fetches, displays, and enhances articles using a modern React + Vite frontend and a Node.js + Express backend, deployed on Render.

🧩 Project Structure
beyondchats-system/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── scraper/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── .env
│   └── package.json


Frontend

⚛️ React (Vite)

📦 Axios

🌍 Environment Variables (import.meta.env)

🎨 CSS / UI components

Backend

🟢 Node.js

🚀 Express.js

🍃 MongoDB + Mongoose

🌐 Cheerio (Web Scraping)

🔐 dotenv

🌍 CORS

🤖 OpenAI SDK (Article enhancement)

Deployment

☁️ Render (Backend)

☁️ Vercel (Frontend – optional)

🔑 Environment Variables
Frontend .env
VITE_API_BASE_URL=https://anilbeyondchatbackend.onrender.com

Backend .env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_key

▶️ Running Locally
github link: https://github.com/aniljiA1/anilbeyondchats.git


1. Backend Setup
cd backend
npm install
(node server.js) or (npm start) or (npm run dev)

Backend runs at:

run at: http://localhost:5000
backend deploy link: https://anilbeyondchatbackend.onrender.com


2. Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs at:

run at : http://localhost:5173
frontend deploy: https://anilbeyondchats.vercel.app

📡 API Endpoints
Method	Endpoint	Description
GET	/articles	Fetch all articles
GET	/	Health check
✅ Features

📄 Article listing

🔍 View original & enhanced content

🔗 Reference links

⚡ Fast API integration

🌐 Fully deployed backend

🔐 Environment-based configuration

🚀 Deployment Notes

Backend binds to process.env.PORT

Server listens on 0.0.0.0 (Render-compatible)

Frontend uses .env for API base URL

nodemon used only in development


🌐 Live Links

Backend (Render):
👉 https://anilbeyondchatbackend.onrender.com

Frontend (vercel):
👉 https://anilbeyondchats.vercel.app


👨‍💻 Author
Anil Kumar
GitHub: https://github.com/aniljiA1
Full Stack Developer


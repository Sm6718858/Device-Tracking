Live-> https://device-tracking-8e2r.onrender.com/
# 🌍 Real-Time Location Tracker

A real-time location sharing app built with **Node.js, Express, Socket.IO, and Leaflet.js**.  
Users can share their live geolocation, which is updated on an interactive map in real-time.  
If a user disconnects, their marker is automatically removed.  

---

## 🚀 Features
- 📡 **Real-time geolocation tracking** using Socket.IO  
- 🗺️ **Interactive maps** powered by Leaflet + OpenStreetMap  
- 👥 **Multiple users support** (each user has their own marker)  
- 🔄 **Smooth live updates** (fly-to animation on location change)  
- ❌ **Auto removal** of disconnected users  
- 🎨 Clean UI with responsive map styling  

---

## 🛠️ Tech Stack
- **Frontend**: Leaflet.js, Vanilla JS, EJS templates, CSS  
- **Backend**: Node.js, Express.js, Socket.IO  
- **Deployment**: Render (or Railway/Heroku alternative)  

---

## 📂 Project Structure
project/
├─ public/ # Static files
│ ├─ css/ # Styles
│ └─ js/ # Client-side scripts
├─ views/ # EJS templates
│ └─ index.ejs
├─ server.js # Express + Socket.IO backend
├─ package.json
└─ README.md

yaml
Copy code

---

## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/map.git
cd map
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run in development mode
bash
Copy code
npm run dev
4️⃣ Run in production mode
bash
Copy code
npm start
Server will start at:

arduino
Copy code
http://localhost:3000

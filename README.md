# ThrowIt 🚀

> The simplest way to share files online — no login, no signup, just a secret key.

## 🌐 Live Demo
https://file-sharer-ye4n.onrender.com

---

## ✨ Features

- 🔑 **Secret Key Rooms** — enter any secret key to create or join a room instantly
- 📁 **File Sharing** — upload and view files shared by everyone in the same room
- 💬 **Real-time Chat** — chat with other users in the same room
- 🖼️ **All File Types** — images, PDFs, documents, videos, audio
- 👥 **Shared Space** — all users with the same key see the same files
- 🔒 **No Login Required** — just a secret key, nothing else
- 💾 **Persistent Rooms** — files stay even after you leave and rejoin

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Web framework |
| EJS | Templating engine |
| PostgreSQL | Database |
| Prisma | ORM |
| Multer | File upload handling |
| Cloudinary | File storage |
| multer-storage-cloudinary | Cloudinary + Multer integration |
| Socket.io | Real-time chat |

---

## 🚀 How to Use

1. Go to https://file-sharer-ye4n.onrender.com
2. Enter any secret key (e.g. `mango`)
3. Click **Throw** — you are now inside your room
4. Upload files — anyone with the same key can see them
5. Click **Chat** to open real-time chat with others in the room
6. Share your secret key with anyone you want to share files with

---

## ⚙️ Installation (Local Setup)

### Prerequisites
- Node.js
- PostgreSQL database

### Steps

1. Clone the repo
```bash
git clone https://github.com/bhumika019579/file_sharer.git
cd throwit
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```env
DATABASE_URL=your_postgresql_url
cloud_name=your_cloudinary_cloud_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_api_secret
```

4. Push database schema
```bash
npx prisma db push
```

5. Run the server
```bash
node app.js
```

6. Open `http://localhost:8001`

---

## 📁 Project Structure

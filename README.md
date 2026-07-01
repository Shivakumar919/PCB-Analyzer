# 🖥️ PCB Analyzer AI

An AI-powered Printed Circuit Board (PCB) Analysis platform built using the MERN Stack. The application allows users to upload PCB images, analyze them using AI, chat with an AI assistant about PCB-related queries, and generate downloadable reports.

---

## 📌 Features

### 👤 User Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Logout

### 📤 PCB Upload
- Upload PCB Images
- Image Preview
- Secure File Storage

### 🤖 AI PCB Analysis
- Analyze PCB Images
- Detect PCB Components
- Identify Possible Issues
- Display AI Analysis Results

### 💬 AI Chat Assistant
- Ask PCB-related questions
- Context-based AI Responses
- Chat History

### 📄 Report Generator
- Generate Analysis Report
- Download Report
- View Previous Reports

### 👤 User Profile
- Profile Page
- Upload Profile Picture
- View User Details

### 📱 Responsive UI
- Modern Dashboard
- Sidebar Navigation
- Mobile Friendly

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Axios
- CSS3

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- bcrypt

## Database
- MongoDB Atlas

## AI
- Gemini API (Google AI Studio)

---

# 📂 Project Structure

```
pcb-analyzer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   ├── app.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/pcb-analyzer.git
```

Move into project

```bash
cd pcb-analyzer
```

---

## 2. Install Frontend

```bash
cd client
npm install
```

---

## 3. Install Backend

```bash
cd ../server
npm install
```

---

# ⚙ Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

---

# ▶ Running the Project

## Backend

```bash
cd server
npm run dev
```

Runs on

```
http://localhost:5000
```

---

## Frontend

```bash
cd client
npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 📸 Application Screens

- Home Page
- Login
- Signup
- Dashboard
- PCB Upload
- AI Analysis
- Chat Assistant
- Report Generator
- Profile Page

---

# 🔐 Authentication

The project uses JWT Authentication.

Protected pages include:

- Dashboard
- Upload
- Chat
- Reports
- Profile

---

# 📊 Workflow

```
User Login
      │
      ▼
Upload PCB Image
      │
      ▼
Image Stored
      │
      ▼
AI Analysis
      │
      ▼
Display Results
      │
      ▼
Chat with AI
      │
      ▼
Generate Report
      │
      ▼
Download Report
```

---

# 📦 API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /signup |
| POST | /login |

---

## Upload

| Method | Endpoint |
|---------|----------|
| POST | /upload |

---

## Chat

| Method | Endpoint |
|---------|----------|
| POST | /chat |

---

## Analysis

| Method | Endpoint |
|---------|----------|
| POST | /analyze |

---

## Reports

| Method | Endpoint |
|---------|----------|
| GET | /reports |
| GET | /download/:id |

---

# 📷 Screenshots

Add screenshots inside

```
screenshots/
```

Example

```
screenshots/
│
├── home.png
├── login.png
├── dashboard.png
├── upload.png
├── analysis.png
├── chat.png
├── report.png
└── profile.png
```

Then display them:

```md
## Home

![Home](screenshots/home.png)

## Dashboard

![Dashboard](screenshots/dashboard.png)
```

---

# 🧪 Future Improvements

- OCR for PCB labels
- Fault Detection
- Component Identification
- PCB Trace Analysis
- 3D PCB Visualization
- Export PDF Reports
- Email Reports
- Dark Mode
- Admin Panel
- Analysis History

---

# 🤝 Contributing

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 👨‍💻 Author

**SHIVA KUMAR**

ECE Student

MERN Stack Developer

AI & IoT Enthusiast

---

# ⭐ Support

If you found this project helpful,

⭐ Star this repository on GitHub.

---

## 🙏 Acknowledgements

- React
- Node.js
- Express.js
- MongoDB Atlas
- Google AI Studio (Gemini API)
- Vite
- JWT
- Multer
# REST API Backend Service

A secure and scalable REST API backend built using Node.js, Express.js, MongoDB, and JWT authentication.  
This project includes user authentication, protected routes, task CRUD operations, search, pagination, filtering, sorting, and professional error handling.

## 🚀 Features

- User registration and login
- JWT authentication
- Password hashing with bcrypt
- Protected routes
- Task CRUD operations
- User-specific task management
- Search tasks by title
- Pagination support
- Filter tasks by completion status
- Sort tasks by newest or oldest
- MongoDB Atlas integration
- Centralized error handling
- MVC folder structure

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors
- nodemon

## 📁 Folder Structure

```txt
backend-api/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── .gitignore
├── package.json
├── server.js
└── README.md
⚙️ Installation
git clone https://github.com/Akshithreddy8025/REST-API-Backend-Service.git
cd REST-API-Backend-Service
npm install
🔐 Environment Variables

Create a .env file in the root folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
▶️ Run Project
npm run dev

Server will run on:

http://localhost:5000
📌 API Endpoints
Auth Routes
POST /api/auth/register
POST /api/auth/login
Task Routes
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
🔎 Search, Pagination, Filtering & Sorting
GET /api/tasks?search=backend&page=1&limit=5
GET /api/tasks?completed=true&sort=oldest
GET /api/tasks?completed=false&sort=newest
🔐 Protected Route Header

For protected routes, add this header:

Authorization: Bearer YOUR_JWT_TOKEN
📦 Example Register Request
{
  "name": "Akshith",
  "email": "akshith@gmail.com",
  "password": "123456"
}
📦 Example Task Request
{
  "title": "Learn Backend Development"
}
📌 Project Status

Completed locally with authentication, authorization, CRUD, search, pagination, filtering, sorting, and error handling.

👨‍💻 Author

Akshith Reddy
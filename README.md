🏪 Store Rating App

A FullStack web application where users can register, log in, and submit ratings for stores. Built with:

Backend: Express.js (Node.js)

Database: MySQL

Frontend: React.js

🚀 Features
🔑 Authentication & Roles

Single login system with 3 roles:

System Administrator

Store Owner

Normal User

👩‍💻 Normal User

Sign up & log in

Update password

View list of all stores

Search stores by Name or Address

Submit or update ratings (1–5) for stores

Logout

🛠️ System Administrator

Add new stores, normal users, and admin users

Dashboard with:

Total users

Total stores

Total ratings

Manage stores and users with filtering (Name, Email, Address, Role)

View user details (including Store Owner ratings)

Logout

🏪 Store Owner

Log in and update password

Dashboard with:

Users who rated their store

Average store rating

Logout

✅ Validations

Name: 20–60 chars

Address: Max 400 chars

Password: 8–16 chars, must include 1 uppercase + 1 special char

Email: Standard email validation

📊 Additional

Sorting supported for all tables (Name, Email, Address, Role, etc.)

⚙️ Installation & Setup
1️⃣ Clone Repo
git clone https://github.com/<your-username>/store-rating-app.git
cd store-rating-app

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=store_rating_app
JWT_SECRET=your_jwt_secret


Start server:

node server.js


Runs at: http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start


Runs at: http://localhost:3000

🔮 Tech Stack

Frontend: React.js, Axios, React Router

Backend: Express.js, JWT, bcrypt, MySQL2

Database: MySQL

📌 Usage

Register as a Normal User or login as an Admin / Store Owner.

Based on role, navigate dashboards:

Admin → Manage users & stores, view stats

User → Rate stores, search, view ratings

Store Owner → See ratings & average score

📄 License

This project is for learning & assessment purposes.

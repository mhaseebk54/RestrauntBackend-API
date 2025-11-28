# 🍽️ RestrauntBackend-API

This project is a **Node.js & Express.js backend API** for managing restaurants, food items, categories, users, and orders. It uses **MongoDB** for data storage and provides a RESTful API to support full-stack restaurant management applications.

---

## 📌 Project Description

The API is designed to demonstrate how a structured backend can manage complex data for restaurants. It includes modular controllers for handling authentication, users, restaurants, food items, categories, and orders. Each module follows REST principles to ensure clean and maintainable code.

The system is ready to be connected with any frontend (React, Angular, etc.) for real-time restaurant management.

---

## 🧠 Modules and Functionality

### Authentication
- **Sign up / Login**
- JWT-based authentication
- Password hashing for security

### User Management
- Create, read, update, and delete user profiles
- Role-based access control (optional)

### Restaurant Management
- CRUD operations for restaurants
- Manage restaurant details and menus

### Food Management
- CRUD operations for food items
- Assign items to categories

### Category Management
- Manage food categories
- Assign foods to categories

### Order Management
- Create and track customer orders
- Update order status

---

## 🧩 Application Workflow

1. API endpoints are exposed via **Express routes**.
2. Requests are handled by **controllers**, which interact with **MongoDB models**.
3. Responses are returned in JSON format.
4. Authentication middleware secures protected routes.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Authentication:** JWT  
- **Environment Management:** dotenv  
- **Other:** Nodemon (for development)  

---

## 📊 Files Included

- `app.js` → Main server entry point  
- `/controllers` → Handles API logic for each module  
- `/models` → Mongoose schemas for MongoDB  
- `/routes` → API endpoints  
- `/middlewares` → Custom middleware (e.g., auth)  
- `/config` → Database and environment configuration  
- `package.json` → Project dependencies and scripts  

---

💡 Key Highlights

Modular design with separate controllers and routes

JWT-based authentication

RESTful API structure

Easy to integrate with frontend applications
```bash
git clone https://github.com/mhaseebk54/RestrauntBackend-API.git

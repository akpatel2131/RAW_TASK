# MERN Stack Todo List Application with User Authentication

A full-stack Todo List application built with the MERN stack (MongoDB, Express, React, Node.js) that includes user authentication and task management features.

## Features

- User authentication (register, login, logout)
- JWT-based authentication
- Create, read, update, and delete tasks
- Mark tasks as completed/incomplete
- Filter tasks by status (all, active, completed)
- Responsive design

## Project Structure

The project is organized into two main directories:

- `client`: React frontend
- `server`: Node.js/Express backend

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation and Setup

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Tasks

- `GET /api/tasks`: Get all tasks for the logged-in user
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update a task (toggle completion status)
- `DELETE /api/tasks/:id`: Delete a task

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

### Frontend
- React
- React Router
- Axios
- Context API for state management

## Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Secure HTTP-only cookies

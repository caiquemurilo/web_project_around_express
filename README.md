# Around the U.S. - Backend (Express.js)

This is the backend infrastructure for the "Around the U.S." web application, developed as part of the TripleTen Software Engineering bootcamp. It serves as a RESTful API to manage user profiles and image cards for the React frontend.

Currently, the application is transitioning from using a provided remote test API to a custom-built Node.js and Express server.

🚧 **Current Status: Sprint 15 Complete**
This iteration marks the beginning of the backend development. The server is configured with Express, establishing initial routing and serving mock data from local JSON files. Over the next two sprints, this foundation will evolve to include a MongoDB database, robust security, and user authentication.

## 🚀 Features (Current Iteration)

*   **Express Server Setup:** Initialization of a local development server running on port 3000 with hot-reloading.
*   **RESTful Routing:** Implementation of modular routing for the primary endpoints: `/users`, `/users/:id`, and `/cards`.
*   **File System Integration:** Utilization of Node's native `fs` and `path` modules to asynchronously read and serve mock data from local `.json` files.
*   **Error Handling:** Centralized middleware for 500 server errors and strict 404 responses for undefined routes or missing user IDs.
*   **Code Quality & Linting:** Fully configured with ESLint enforcing the Airbnb JavaScript Style Guide to ensure syntax consistency and maintainability.

## 🛠️ Technologies Used

*   **Node.js (ES Modules):** JavaScript runtime environment executing on the server side.
*   **Express.js:** Fast, unopinionated, minimalist web framework for Node.js used to build the API.
*   **nodemon:** Utility that monitors for any changes in your source and automatically restarts the server.
*   **ESLint:** Statically analyzes the code to quickly find problems, configured with `eslint-config-airbnb-base`.

## 🔧 Installation and Setup

To run this backend server locally, ensure you have Node.js installed.

1. **Clone the repository:**
   git clone https://github.com/caiquemurilo/web_project_around_express
   cd web_project_around_express

2. **Install dependencies:**
   npm install

3. **Run the development server (with hot-reload):**
   npm run dev

   The API will be available at `http://localhost:3000`.

## 📝 Development Roadmap & Learning Objectives

This backend is built iteratively over three sprints. Below is the progression of skills and architectural patterns applied in this initial phase.

*   **Sprint 15: Introduction to Node.js & Express**
    *   Setting up a Node.js environment from scratch (`npm init`).
    *   Building a web server and handling HTTP requests/responses with Express.js.
    *   Implementing a modular project structure separating routes (`/routes`) and data (`/data`).
    *   Reading files asynchronously using the `fs` module and resolving dynamic paths with `url` and `path`.
    *   Configuring developer tools and enforcing code standards with EditorConfig and ESLint (Airbnb rules).

---
*Developed by Caique Murilo Sacramento*

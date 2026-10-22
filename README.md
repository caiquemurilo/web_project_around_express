# Around the U.S. - Backend (Express.js & MongoDB)

This is the backend infrastructure for the "Around the U.S." web application, developed as part of the TripleTen Software Engineering bootcamp. It serves as a RESTful API to manage user profiles and image cards for the React frontend.

🚧 **Current Status: Sprint 16 Complete**
This iteration marks the transition from serving static mock data to a dynamic, database-driven architecture. The server is now fully integrated with MongoDB using Mongoose, featuring data validation, comprehensive CRUD operations, and advanced error handling. 

## 🚀 Features (Current Iteration)

*   **MongoDB & Mongoose Integration:** Connected to a local MongoDB database (`aroundb`) with strictly defined schemas and models for Users and Cards.
*   **Advanced RESTful Controllers:** Modular implementation of controllers handling complex queries, including document creation, profile updates (`findByIdAndUpdate`), and array manipulation for likes (`$addToSet` and `$pull`).
*   **Data Validation:** Custom Regular Expressions (Regex) implemented at the schema level to ensure all avatar and card image links are valid URLs before hitting the database.
*   **Robust Error Handling:** Centralized error processing using Mongoose's `.orFail()` helper. The API accurately intercepts and responds to `ValidationError` (400), `CastError` (400 for invalid IDs), custom 404 Not Found scenarios, and 500 server errors.
*   **Temporary Authorization Middleware:** A mock authentication layer that injects a hardcoded test user ID (`req.user._id`) into every request, laying the groundwork for real JWT authentication in the upcoming sprint.
*   **Code Quality & Linting:** Fully configured with ESLint enforcing the Airbnb JavaScript Style Guide to ensure syntax consistency and maintainability.

## 🛠️ Technologies Used

*   **Node.js (ES Modules):** JavaScript runtime environment executing on the server side.
*   **Express.js:** Fast, unopinionated web framework for Node.js used to build the API endpoints.
*   **MongoDB:** NoSQL document database used to store users and cards.
*   **Mongoose:** Elegant MongoDB object modeling for Node.js, providing schema validation and query helpers.
*   **nodemon:** Utility that monitors for any changes in your source and automatically restarts the server.
*   **ESLint:** Statically analyzes the code to quickly find problems, configured with `eslint-config-airbnb-base`.

## 🔧 Installation and Setup

To run this backend server locally, ensure you have **Node.js** and **MongoDB** installed and running on your machine.

1. **Clone the repository:**
       git clone https://github.com/caiquemurilo/web_project_around_express.git
       cd web_project_around_express

2. **Install dependencies:**
       npm install

3. **Ensure MongoDB is running locally on default port 27017.**

4. **Run the development server (with hot-reload):**
       npm run dev

   The API will be available at `http://localhost:3000`.

## 📝 Development Roadmap & Learning Objectives

This backend is built iteratively over three sprints. Below is the progression of skills and architectural patterns applied so far:

*   **Sprint 16: Databases and RESTful APIs**
    *   Connecting the Express server to a MongoDB database.
    *   Designing Mongoose schemas with required fields, default values, and custom Regex validation.
    *   Executing advanced database queries (creating, reading, updating, and deleting documents).
    *   Handling database-specific errors (CastError, ValidationError) and mapping them to appropriate HTTP status codes (400, 404, 500).

*   **Sprint 15: Introduction to Node.js & Express**
    *   Setting up a Node.js environment from scratch (`npm init`).
    *   Building a web server and handling HTTP requests/responses with Express.js.
    *   Implementing a modular project structure separating routes (`/routes`) and data (`/data`).
    *   Reading files asynchronously using the `fs` module and resolving dynamic paths with `url` and `path`.
    *   Configuring developer tools and enforcing code standards with EditorConfig and ESLint (Airbnb rules).


---
*Developed by Caique Murilo Sacramento*

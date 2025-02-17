# Flashcard Application

This web application allows users to create, review, and progress through flashcards using the Leitner System, a spaced repetition learning technique.

## Setup

This project consists of a frontend built with React and a backend built with Node.js. Follow the instructions below to set up both parts of the application.

### Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Environment Variables:**

   Copy the `.env.example` file to a file named `.env` in the same directory. Fill in the values in the `.env` file. These values are intentionally not provided in the example file for security reasons.

   ```
   DATABASE_URL="mongodb://user:password@host:port/database_name"

   ```

3. **Install Dependencies:**

   ```bash
   bun i
   ```

   or

   ```bash
   npm install
   ```

4. **Run the Server:**

   ```bash
   bun server.js
   ```

   or

   ```bash
   node server.js
   ```

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   bun i
   ```

   or

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   bun run dev
   ```

   or

   ```bash
   npm run dev
   ```

## Development Process

1. **Functionality Planning:** Initially, all desired features were documented. This helped to define the scope of the project and prioritize development efforts.

2. **Backend Development:** The backend was further developed to implement the API endpoints required for the planned features.

3. **Frontend Development:** The frontend was then enhanced to utilize the backend API and provide the user interface for the additional features.

4. **Iterative Feature Implementation:** New features were added one by one, with thorough testing at each stage to ensure stability and functionality. This iterative process allowed for flexibility and easier debugging.

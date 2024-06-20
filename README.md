# gitCommitApp

This app is used to view the commit differences from a GitHub repository.

Ensure Node.js is installed on your system. Please refer to this link to download Node.js: https://nodejs.org/en

Clone the application repository from https://github.com/Peratchi456/gitCommitApp

## Steps to Run the Application

### Step 1: Start Backend Server

1. Place the `.env` file inside the `backend` folder (this file was shared via email).
2. Open a new terminal in VS Code, navigate to the `backend` folder, and run the following command:
   ```
   npm install
   ```
3. After the node modules are installed, run the following command to start the server:
   ```
   npm start
   ```

### Step 2: Start Frontend

1. Open a new terminal in VS Code, navigate to `frontend/github-commit`, and run the following command:
   ```
   npm install
   ```
2. After the node modules are installed, run the following command to start the frontend:
   ```
   npm start
   ```

### Step 3: Navigate to Landing Page

1. Open any browser and paste this link in the URL bar: `http://localhost:3000/`
2. Enter the following details:
   - **Owner:** Peratchi456
   - **Repo:** chatApp
   - **Commit SHA:** 734ece1ec12433765863856671c781bed839842d

3. Click the **Get Commit Details** button.

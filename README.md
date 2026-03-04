# File-Based User Management with Express.js

This project is a simple RESTful API for user management built with Express.js and Node.js. It demonstrates basic CRUD (Create, Read, Update, Delete) operations where user data is persisted in a local `users.json` file, serving as a file-based "database".

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/harshad912004/File_Based_User_Management_ExpressJs.git
    ```

2.  Navigate to the project directory:
    ```bash
    cd file_based_user_management_expressjs
    ```

3.  Install the required dependencies:
    ```bash
    npm install express nodemon fs crypto
    ```

## Running the Application

To start the development server with `nodemon` (which automatically restarts on file changes), run the following command:

```bash
npm start
```

The server will be running at `http://localhost:3000`.

## API Endpoints

All endpoints are prefixed with `/users`.

### Get All Users
-   **Method:** `GET`
-   **Endpoint:** `/users`
-   **Description:** Retrieves a list of all users.
-   **Success Response (200 OK):**
    ```json
    [
        {
            "id": "0f6e61",
            "name": "ABC DEF",
            "email": "abc@gmail.com"
        },
        {
            "id": "878f0f",
            "name": "GHI JKL",
            "email": "ghi@gmail.com"
        }
    ]
    ```

### Get User by ID
-   **Method:** `GET`
-   **Endpoint:** `/users/:id`
-   **Description:** Retrieves a single user by their unique ID.
-   **Success Response (200 OK):**
    ```json
    {
        "id": "0f6e61",
        "name": "ABC DEF",
        "email": "abc@gmail.com"
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "error": "User not found"
    }
    ```

### Create a New User
-   **Method:** `POST`
-   **Endpoint:** `/users`
-   **Description:** Creates a new user. The email must be unique. A unique ID is generated automatically.
-   **Request Body:**
    ```json
    {
        "name": "New User",
        "email": "new.user@example.com"
    }
    ```
-   **Success Response (201 Created):**
    ```json
    {
        "message": "User Created"
    }
    ```
-   **Error Response (409 Conflict):**
    ```json
    {
        "error": "Email already exist."
    }
    ```

### Update a User by ID
-   **Method:** `PUT`
-   **Endpoint:** `/users/:id`
-   **Description:** Updates an existing user's name and email.
-   **Request Body:**
    ```json
    {
        "name": "Updated Name",
        "email": "updated.email@example.com"
    }
    ```
-   **Success Response (200 OK):**
    ```json
    {
        "message": "User Updated.",
        "user": {
            "id": "0f6e61",
            "name": "Updated Name",
            "email": "updated.email@example.com"
        }
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "message": "User not found"
    }
    ```

### Delete a User by ID
-   **Method:** `DELETE`
-   **Endpoint:** `/users/:id`
-   **Description:** Deletes a user by their unique ID.
-   **Success Response (200 OK):**
    ```json
    {
        "message": "User 0f6e61 Deleted"
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
        "message": "User not found"
    }

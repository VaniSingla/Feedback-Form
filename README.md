## Feedback Form System

## Project Overview

This is a full-stack feedback form application where users can submit their feedback through a simple user interface. The frontend collects user input (name, email, feedback) and sends it to a backend API built using Node.js and Express.

## Features

- Submit feedback with name, email, and message
- Client-side validation (required fields, email format)
- Server-side validation
- Displays success and error messages
- Prevents multiple submissions (button disable)
- Stores feedback in memory

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- API: REST (POST /feedback)

## Project Structure
```
feedback-form/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── .gitignore
└── README.md
```

## How to Run Locally

1. Start Backend
```
cd backend
npm install
npm start
```

👉 Backend runs on: http://localhost:3000

2. Run Frontend

- Open "frontend/index.html" in your browser


## Testing

✅ Valid Input

- Displays: "Feedback submitted successfully"

❌ Empty Fields

- Shows error message

❌ Invalid Email

- Shows error message

❌ Backend Not Running

- Shows: "Server error!"

---

⚠️ Possible Failure Cases

- Invalid email format
- Empty input fields
- Server not running
- Network failure
- Multiple rapid submissions

## Improvements Implemented

- Input validation on frontend and backend
- Email validation using regex
- Disabled submit button to prevent duplicate submissions
- Proper error handling using try-catch

## Trade-offs

- Uses in-memory storage (data is not persistent)
- No database integration for simplicity

## Future Improvements

- Add database (MongoDB / PostgreSQL)
- Deploy application online
- Improve UI/UX
- Add authentication system

## What I Learned

- How frontend and backend communicate using APIs
- Handling form data and validation
- Using Express.js to build APIs
- Error handling in JavaScript (try-catch)
- Preventing duplicate submissions
- Structuring a full-stack project

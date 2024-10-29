
# Whisp - Chat App Project 💬✨

Welcome to the **Whisp Chat App Project**! This application is designed to provide a seamless messaging experience, enabling users to connect and communicate efficiently through real-time chat functionality.

## 🛠️ Features

- **Real-Time Messaging**: Utilize WebSocket technology for instant messaging between users.
- **User Authentication**: Secure user registration and login features to manage accounts.
- **Direct Messaging**: Enable users to send direct messages to each other.
- **Notifications**: Implement real-time notifications for new messages and activities.

## 📁 Project Structure

The project is structured as follows:

```
/whisp-chat-app
├── /backend          # Server-side code
│   ├── /config       # Configuration files
│   ├── /controllers  # Business logic for routes
│   ├── /models       # Database models
│   ├── /routes       # API endpoints
│   ├── /sockets      # WebSocket logic
│   └── /utils        # Utility functions
│
├── /frontend         # Client-side code
│   ├── /public       # Public assets
│   ├── /src          # React source files
│   │   ├── /components # Reusable components
│   │   ├── /pages      # Page components (Chat, Login, etc.)
│   │   └── /store      # State management (e.g., Redux)
│   └── package.json    # Project metadata and dependencies
│
├── .env              # Environment variables
└── README.md         # Project documentation
```

## 📁 Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/whisp-chat-app.git
   cd whisp
   ```

2. **Create a `.env` file** in your root directory and add the following environment variables:

   ```plaintext
   MONGO_URI=your_mongo_uri
   PORT=5000
   JWT_SECRET=your_secret_key
   NODE_ENV=development
   ```

3. **Install dependencies**:

   ```bash
   # Navigate to the root directory and install dependencies
   npm install

   # Navigate to the frontend directory and install dependencies
   cd ../frontend
   npm install
   ```

4. **Run the backend server**:

   ```bash
   cd whisp
   npm run server
   ```

5. **Run the frontend application**:

   ```bash
   cd ../frontend
   npm run start
   ```

## 🚀 Usage

- Visit `http://localhost:5173` in your browser to access the application.
- Users can register or log in to access the chat features, create rooms, and send messages.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or API enhancements, feel free to open an issue or submit a pull request.

---

Thank you for checking out the **Whisp - Chat App Project**! If you have any questions or need assistance, feel free to reach out.

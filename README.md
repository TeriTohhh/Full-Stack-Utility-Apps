# 📝 To-Do App Full Stack Project

A modern, full-stack to-do application built with React (Frontend) and Node.js/Express (Backend). This project demonstrates a complete CRUD application with user authentication, task management, and a clean, responsive user interface.

## 🌟 Features

- **User Authentication**: Secure registration and login system
- **Task Management**: Create, read, update, and delete tasks
- **User Dashboard**: Centralized dashboard with navigation to different features
- **Profile Management**: User profile viewing and management
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Dynamic UI updates without page refresh
- **Secure Backend**: JWT-based authentication and authorization

## 🏗️ Project Structure

```
to-do-APP-fullStack/
├── FE_Utilty_Apps/           # Frontend React Application
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service functions
│   │   ├── styles/          # CSS stylesheets
│   │   └── api/             # Axios configuration
│   └── package.json
├── BE_Utilty_Apps/           # Backend Node.js Application
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Custom middleware
│   │   └── config/          # Configuration files
│   └── package.json
├── to-do-AppfrontEnd/        # Frontend source code
├── to-Do-App-BackEnd/        # Backend source code
└── README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd to-do-APP-fullStack
   ```

2. **Setup Backend**
   ```bash
   cd BE_Utilty_Apps
   npm install
   cp .env.example .env
   # Configure your database credentials in .env
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../FE_Utilty_Apps
   npm install
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🛠️ Technology Stack

### Frontend
- **React 19**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server
- **Axios**: HTTP client for API requests
- **CSS3**: Custom styling with responsive design

### Backend
- **Node.js**: Server runtime
- **Express.js**: Web application framework
- **Sequelize**: ORM for PostgreSQL
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **express-validator**: Input validation

### Database
- **PostgreSQL**: Primary database

## 📱 Application Features

### 🔐 Authentication System
- User registration with validation
- Secure login with JWT tokens
- Password hashing with bcrypt
- Protected routes and middleware

### ✅ Task Management
- Create new tasks with title and description
- Mark tasks as complete/incomplete
- Edit existing tasks
- Delete tasks
- Filter tasks by completion status

### 👤 User Management
- User profile viewing
- Dashboard with feature navigation
- Secure session management

### 🎨 User Interface
- Clean, modern design
- Responsive layout for all devices
- Intuitive navigation
- Real-time feedback and updates

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `BE_Utilty_Apps` directory:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Task Endpoints
- `GET /api/tasks` - Get all user tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🧪 Development

### Running in Development Mode

**Backend:**
```bash
cd BE_Utilty_Apps
npm run dev
```

**Frontend:**
```bash
cd FE_Utilty_Apps
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd FE_Utilty_Apps
npm run build
```

**Backend:**
```bash
cd BE_Utilty_Apps
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Hare Krishna**

## 🔮 Future Enhancements

- 💰 Expense Tracker (Coming Soon!)
- 📊 Analytics Dashboard
- 🔔 Push Notifications
- 📱 Mobile App
- 🌙 Dark Mode
- 📤 Task Export/Import
- 👥 Team Collaboration

---

Made with ❤️ using React and Node.js

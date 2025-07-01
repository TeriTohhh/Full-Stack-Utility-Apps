# 🚀 To-Do App Backend

A robust Node.js/Express backend server providing RESTful APIs for the To-Do application with user authentication, task management, and secure data handling.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Development](#development)

## ✨ Features

- **RESTful API**: Clean and consistent API design
- **JWT Authentication**: Secure token-based authentication
- **User Management**: Registration, login, and profile management
- **Task CRUD Operations**: Complete task management functionality
- **Input Validation**: Comprehensive request validation
- **Error Handling**: Structured error responses
- **Database Integration**: PostgreSQL with Sequelize ORM
- **Security**: Password hashing, CORS protection
- **Middleware**: Custom authentication and validation middleware

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Validation**: express-validator, Joi
- **Environment Management**: dotenv
- **Development**: nodemon

## 📁 Project Structure

```
BE_Utilty_Apps/
├── src/
│   ├── app.js                 # Application entry point
│   ├── config/
│   │   ├── config.js          # Database configuration
│   │   ├── database.js        # Database connection
│   │   ├── responseMessage.js # Response utilities
│   │   └── statusCodes.js     # HTTP status codes
│   ├── controllers/
│   │   ├── authController.js  # Authentication logic
│   │   └── taskController.js  # Task management logic
│   ├── database/
│   │   ├── connection.js      # Database connection setup
│   │   └── models/
│   │       ├── index.js       # Model exports
│   │       ├── task.js        # Task model
│   │       └── users.js       # User model
│   ├── middleware/
│   │   ├── authMiddleware.js  # JWT authentication middleware
│   │   └── validateTask.js    # Task validation middleware
│   ├── routes/
│   │   ├── index.js           # Route aggregator
│   │   ├── authRoutes.js      # Authentication routes
│   │   └── taskRoutes.js      # Task routes
│   ├── services/
│   │   ├── authService.js     # Authentication business logic
│   │   ├── baseService.js     # Base service class
│   │   └── taskService.js     # Task business logic
│   └── validations/           # Custom validation rules
├── package.json
├── .env.example
└── README.md
```

## 🔧 Installation

1. **Navigate to backend directory**
   ```bash
   cd BE_Utilty_Apps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Setup database**
   - Create a PostgreSQL database
   - Update database credentials in `.env`

5. **Start development server**
   ```bash
   npm run dev
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todo_app_db
DB_USER=your_db_username
DB_PASSWORD=your_db_password

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5173
```

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Body | Response |
|--------|----------|-------------|------|----------|
| POST | `/register` | Register new user | `{ name, email, password, username }` | User data + token |
| POST | `/login` | User login | `{ email, password }` | User data + token |

### Task Routes (`/api/tasks`) - 🔒 Protected

| Method | Endpoint | Description | Body | Response |
|--------|----------|-------------|------|----------|
| GET | `/` | Get all user tasks | - | Array of tasks |
| POST | `/` | Create new task | `{ title, description }` | Created task |
| PUT | `/:id` | Update task | `{ title, description, is_completed }` | Updated task |
| DELETE | `/:id` | Delete task | - | Success message |

### Response Format

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

### Error Response Format

```json
{
  "success": false,
  "message": "Error message",
  "errors": [ /* validation errors if any */ ]
}
```

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL,
  profile_picture VARCHAR(255),
  address TEXT,
  phone_number VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tasks Table
```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Login/Register**: Receive JWT token
2. **Protected Routes**: Include token in Authorization header
3. **Token Format**: `Authorization: Bearer <token>`
4. **Token Expiry**: Configurable via `JWT_EXPIRES_IN`

### Protected Routes Middleware

```javascript
// Usage in routes
router.use(authMiddleware); // Protects all routes below
```

## ❌ Error Handling

Centralized error handling with consistent response format:

- **400**: Bad Request (Validation errors)
- **401**: Unauthorized (Authentication required)
- **403**: Forbidden (Access denied)
- **404**: Not Found (Resource not found)
- **500**: Internal Server Error

## ✅ Validation

### Input Validation
- **express-validator**: Request validation
- **Joi**: Schema validation
- **Custom validators**: Business logic validation

### Task Validation Rules
- Title: Required, 1-255 characters
- Description: Optional, max 1000 characters
- Completion status: Boolean

### User Validation Rules
- Name: Required, 1-100 characters
- Email: Valid email format, unique
- Password: Minimum 6 characters
- Username: Required, unique

## 🧪 Development

### Available Scripts

```bash
# Development with auto-reload
npm run dev

# Production start
npm start

# Run tests (if configured)
npm test
```

### Development Workflow

1. **Code Changes**: Edit files in `src/`
2. **Auto Reload**: nodemon automatically restarts server
3. **Testing**: Use Postman or similar tools for API testing
4. **Debugging**: Use console.log or debugger tools

### Adding New Features

1. **Model**: Create/update database models in `models/`
2. **Service**: Add business logic in `services/`
3. **Controller**: Create route handlers in `controllers/`
4. **Routes**: Define API endpoints in `routes/`
5. **Middleware**: Add validation/authentication in `middleware/`

## 📊 Database Management

### Using Sequelize ORM

```javascript
// Model associations
User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });

// Database sync
await sequelize.sync({ force: false });
```

### Migration Commands
```bash
# Create database
createdb todo_app_db

# Sync models (development)
# Handled automatically on server start
```

## 🔍 Logging

- Server startup logs
- Database connection status
- Request/response logging (development)
- Error logging with stack traces

## 🛡️ Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Security**: Secure token generation and validation
- **CORS Protection**: Configured for specific origins
- **Input Sanitization**: Validation and sanitization of all inputs
- **SQL Injection Prevention**: Sequelize ORM protection

## 📈 Performance

- **Database Indexing**: Optimized queries
- **Connection Pooling**: Sequelize connection pool
- **Caching**: Ready for Redis integration
- **Compression**: gzip compression ready

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check PostgreSQL is running
   - Verify credentials in `.env`
   - Ensure database exists

2. **JWT Token Issues**
   - Check JWT_SECRET in `.env`
   - Verify token format in requests

3. **Port Already in Use**
   - Change PORT in `.env`
   - Kill existing Node processes

### Debug Commands

```bash
# Check database connection
npm run db:test

# Verbose logging
DEBUG=* npm run dev

# Check port usage
netstat -ano | findstr :3000
```

---

## 📞 Support

For issues and questions:
- Check the main project README
- Review API documentation
- Check environment configuration
- Verify database setup

Made with ❤️ using Node.js and Express

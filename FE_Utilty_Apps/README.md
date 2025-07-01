# 🎨 To-Do App Frontend

A modern, responsive React frontend application for the To-Do App with clean UI, smooth interactions, and comprehensive user experience features.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Routing](#routing)
- [Development](#development)

## ✨ Features

- **Modern React**: Built with React 19 and modern hooks
- **Responsive Design**: Mobile-first approach with CSS Grid/Flexbox
- **User Authentication**: Login/Register with form validation
- **Task Management**: Intuitive CRUD operations for tasks
- **Real-time Updates**: Dynamic UI updates without page refresh
- **Dashboard Navigation**: Centralized navigation hub
- **Profile Management**: User profile viewing and editing
- **Error Handling**: User-friendly error messages and feedback
- **Loading States**: Smooth loading indicators and transitions
- **Form Validation**: Client-side validation with feedback

## 🛠️ Tech Stack

- **React 19**: Latest React with concurrent features
- **Vite**: Fast build tool and development server
- **React Router DOM 7**: Client-side routing
- **Axios**: HTTP client for API requests
- **CSS3**: Modern CSS with custom properties
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
FE_Utilty_Apps/
├── public/
│   └── vite.svg              # Vite logo
├── src/
│   ├── main.jsx              # Application entry point
│   ├── App.jsx               # Root component
│   ├── api/
│   │   └── axiosInstance.js  # Axios configuration
│   ├── components/
│   │   ├── Header.jsx        # Navigation header
│   │   ├── TaskForm.jsx      # Task creation/editing form
│   │   ├── TaskItem.jsx      # Individual task component
│   │   ├── TaskList.jsx      # Task list container
│   │   ├── TaskManager.jsx   # Main task management page
│   │   ├── Profile.jsx       # User profile component
│   │   ├── NotFoundPage.jsx  # 404 error page
│   │   └── auth/
│   │       ├── LoginForm.jsx     # Login form component
│   │       ├── RegisterForm.jsx  # Registration form
│   │       └── authService.jsx   # Auth utility functions
│   ├── pages/
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── LoginPage.jsx     # Login page
│   │   └── RegisterPage.jsx  # Registration page
│   ├── services/
│   │   └── api.js            # API service functions
│   ├── styles/
│   │   ├── global.css        # Global styles
│   │   ├── header.css        # Header component styles
│   │   ├── dashboard.css     # Dashboard styles
│   │   ├── authForm.css      # Authentication form styles
│   │   ├── taskManager.css   # Task manager styles
│   │   ├── taskItem.css      # Task item styles
│   │   └── profile.css       # Profile page styles
│   └── assets/
│       └── react.svg         # React logo
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## 🔧 Installation

1. **Navigate to frontend directory**
   ```bash
   cd FE_Utilty_Apps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:5173`

## 🔐 Environment Setup

### Vite Configuration

The project uses Vite for fast development and building. Configuration in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

### API Configuration

Axios instance configuration in `src/api/axiosInstance.js`:

```javascript
const API_BASE_URL = 'http://localhost:3000/api';
```

## 🧩 Components

### Core Components

#### Header Component
- **Location**: `src/components/Header.jsx`
- **Purpose**: Navigation bar with authentication status
- **Features**: Logo, navigation links, logout functionality

#### TaskManager Component
- **Location**: `src/components/TaskManager.jsx`
- **Purpose**: Main task management interface
- **Features**: Task list, add new task, search/filter

#### TaskItem Component
- **Location**: `src/components/TaskItem.jsx`
- **Purpose**: Individual task display and actions
- **Features**: Edit, delete, toggle completion

#### TaskForm Component
- **Location**: `src/components/TaskForm.jsx`
- **Purpose**: Task creation and editing form
- **Features**: Validation, error handling, submit/cancel

### Authentication Components

#### LoginForm Component
- **Location**: `src/components/auth/LoginForm.jsx`
- **Purpose**: User login interface
- **Features**: Email/password validation, error display

#### RegisterForm Component
- **Location**: `src/components/auth/RegisterForm.jsx`
- **Purpose**: User registration interface
- **Features**: Form validation, password confirmation

## 📄 Pages

### Dashboard Page
- **Route**: `/`
- **Component**: `src/pages/Dashboard.jsx`
- **Purpose**: Main landing page with feature navigation
- **Features**: Quick access cards, upcoming features preview

### LoginPage
- **Route**: `/login`
- **Component**: `src/pages/LoginPage.jsx`
- **Purpose**: User authentication entry point

### RegisterPage
- **Route**: `/register`
- **Component**: `src/pages/RegisterPage.jsx`
- **Purpose**: New user registration

### Task Management
- **Route**: `/tasks`
- **Component**: `src/components/TaskManager.jsx`
- **Purpose**: Complete task management interface

### Profile Page
- **Route**: `/profile`
- **Component**: `src/components/Profile.jsx`
- **Purpose**: User profile display and management

## 🎨 Styling

### CSS Architecture

The project uses a modular CSS approach with separate stylesheets for each component:

- **Global Styles**: `src/styles/global.css` - Base styles, CSS variables
- **Component Styles**: Individual CSS files for each component
- **Responsive Design**: Mobile-first approach with media queries

### CSS Variables

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --success-color: #27ae60;
  --danger-color: #e74c3c;
  --warning-color: #f39c12;
  --light-bg: #f8f9fa;
  --border-radius: 8px;
  --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

### Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

## 🔌 API Integration

### Axios Configuration

```javascript
// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

// Request interceptor for auth token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### API Services

#### Authentication Service
```javascript
// Login user
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials);
  return response.data;
};

// Register user
export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData);
  return response.data;
};
```

#### Task Service
```javascript
// Get all tasks
export const getTasks = async () => {
  const response = await axiosInstance.get('/tasks');
  return response.data;
};

// Create task
export const createTask = async (taskData) => {
  const response = await axiosInstance.post('/tasks', taskData);
  return response.data;
};
```

## 🛣️ Routing

### Route Configuration

```javascript
// src/App.jsx
<Routes>
  <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
  <Route path="/tasks" element={isLoggedIn ? <TaskManager /> : <Navigate to="/login" />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>
```

### Protected Routes

Routes are protected using conditional rendering based on authentication status:

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
```

## 🧪 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Workflow

1. **Component Development**: Create components in `src/components/`
2. **Styling**: Add corresponding CSS files in `src/styles/`
3. **API Integration**: Add service functions in `src/services/`
4. **Routing**: Update routes in `src/App.jsx`
5. **Testing**: Manual testing with development server

### Code Standards

- **ESLint**: Configured for React best practices
- **Component Structure**: Functional components with hooks
- **File Naming**: PascalCase for components, camelCase for utilities
- **Import Organization**: External libraries first, then internal imports

### State Management

The application uses React's built-in state management:

- **useState**: Component-level state
- **useEffect**: Side effects and lifecycle
- **Local Storage**: Authentication token persistence
- **Props**: Data passing between components

## 🎯 Key Features Implementation

### Authentication Flow

1. **Login/Register**: Form submission → API call → Token storage
2. **Route Protection**: Check token existence → Redirect if needed
3. **Logout**: Clear token → Redirect to login

### Task Management

1. **Fetch Tasks**: API call on component mount
2. **Add Task**: Form submission → API call → State update
3. **Edit Task**: Inline editing → API call → State update
4. **Delete Task**: Confirmation → API call → State update

### Error Handling

```javascript
// Component error handling
const [error, setError] = useState('');

try {
  await apiCall();
  setError('');
} catch (error) {
  setError(error.response?.data?.message || 'An error occurred');
}
```

### Loading States

```javascript
// Loading state management
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await apiCall();
  } finally {
    setLoading(false);
  }
};
```

## 📱 Responsive Design

### Mobile-First Approach

```css
/* Base styles for mobile */
.container {
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
```

### Touch-Friendly UI

- Large touch targets (minimum 44px)
- Swipe gestures for mobile
- Responsive typography
- Optimized images and assets

## 🔍 Debugging

### Development Tools

- **React Developer Tools**: Component inspection
- **Browser DevTools**: Network, Console, Elements
- **Vite DevTools**: Build analysis and hot reload

### Common Issues

1. **CORS Errors**: Check backend CORS configuration
2. **API Connection**: Verify backend server is running
3. **Token Issues**: Check localStorage and API headers
4. **Routing Problems**: Verify React Router configuration

## 🚀 Performance Optimization

### Build Optimization

- **Code Splitting**: Dynamic imports for large components
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization
- **Asset Optimization**: Image and font optimization

### Runtime Optimization

- **React.memo**: Component memoization
- **useCallback**: Function memoization
- **useMemo**: Expensive calculation caching
- **Lazy Loading**: Component lazy loading

## 🧪 Testing (Future Enhancement)

### Testing Setup (Recommended)

```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

### Test Structure

```
src/
├── __tests__/
│   ├── components/
│   ├── pages/
│   └── services/
└── test-utils/
```

## 📈 Future Enhancements

- **Dark Mode**: Theme switching functionality
- **Offline Support**: Service Worker implementation
- **Push Notifications**: Browser notification API
- **Drag & Drop**: Task reordering
- **Search & Filter**: Advanced task filtering
- **Export/Import**: Task data management
- **Animation**: Smooth transitions and micro-interactions

---

## 📞 Support

For frontend-specific issues:
- Check browser console for errors
- Verify API endpoint connectivity
- Review React component structure
- Check CSS styling conflicts

Made with ❤️ using React and Vite

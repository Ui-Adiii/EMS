# 🏢 Employee Management System (EMS)

A modern, full-stack web application built with Next.js, React, Redux, and MongoDB for comprehensive employee and task management.

## ✨ Features

### 🔐 Authentication & Authorization
- **User Login System** - Secure authentication with JWT tokens
- **Role-based Access Control** - Admin and Employee roles with different permissions
- **Session Management** - Persistent login state with Redux

### 👥 Employee Management
- **Employee Dashboard** - Personalized view for each employee
- **Profile Management** - Employee information and settings
- **Task Assignment** - Assign tasks to specific employees

### 📋 Task Management
- **Task Creation** - Create new tasks with title, description, date, and category
- **Task Assignment** - Assign tasks to employees by name
- **Status Tracking** - Monitor task progress (New, Active, Completed, Failed)
- **Task Categories** - Organize tasks by type (Design, Development, etc.)

### 📊 Dashboard & Analytics
- **Admin Dashboard** - Overview of all employees and tasks
- **Employee Dashboard** - Personal task overview and statistics
- **Task Statistics** - Count of tasks by status
- **Real-time Updates** - Live data refresh and notifications

### 🎨 User Interface
- **Modern Design** - Clean, responsive interface built with Tailwind CSS
- **Loading States** - Smooth loading indicators for better UX
- **Toast Notifications** - Success and error feedback for all actions
- **Responsive Layout** - Works seamlessly on desktop and mobile devices

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Modern React with hooks and functional components
- **Redux Toolkit** - State management with RTK Query
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Toastify** - Toast notification system

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing and security

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd EMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Database Setup**
   - Ensure MongoDB is running
   - Update the connection string in your environment variables
   - The application will automatically create necessary collections

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
EMS/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── task/          # Task-related endpoints
│   │   └── user/          # User authentication endpoints
│   ├── actions/           # Server actions
│   │   ├── task/          # Task business logic
│   │   └── user/          # User business logic
│   ├── layout.js          # Root layout component
│   └── page.js            # Main application page
├── Components/             # React components
│   ├── Auth/              # Authentication components
│   ├── DashBoard/         # Dashboard components
│   ├── TaskList/          # Task-related components
│   ├── Others/            # Utility components
│   ├── Loader.js          # Loading spinner component
│   └── Button.js          # Reusable button component
├── models/                 # MongoDB schemas
│   ├── user.model.js      # User data model
│   └── task.model.js      # Task data model
├── store/                  # Redux store configuration
│   ├── features/          # Redux slices
│   └── store.js           # Store configuration
├── utils/                  # Utility functions
│   └── connectDB.js       # Database connection
└── middleware/             # Next.js middleware
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 API Endpoints

### Authentication
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout
- `GET /api/user/me` - Get current user info
- `POST /api/user/register` - Register Employee (Only admin)

### Tasks
- `POST /api/task/create` - Create new task
- `PUT /api/task/update-status` - Update task status

## 🎯 Key Components

### Loader Component
- Reusable loading spinner with customizable size and color
- Used throughout the application for consistent loading states

### Button Component
- Enhanced button with loading states and variants
- Supports primary, secondary, danger, and outline styles
- Built-in loading indicators

### Toast Notifications
- Consistent success/error feedback for all user actions
- Integrated with react-toastify for smooth animations

## 🔒 Security Features

- **Password Hashing** - bcrypt for secure password storage
- **JWT Authentication** - Secure token-based authentication
- **Input Validation** - Server-side validation for all inputs
- **Role-based Access** - Restricted access based on user roles

## 🚧 Development Status

- ✅ **Core Features** - Complete
- ✅ **Authentication** - Complete
- ✅ **Task Management** - Complete
- ✅ **User Interface** - Complete
- ✅ **Loading States** - Complete
- ✅ **Toast Notifications** - Complete


**Built with ❤️ using Next.js, React, and MongoDB**

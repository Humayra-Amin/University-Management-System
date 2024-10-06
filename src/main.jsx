import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import FacultyManagement from './components/FacultyManagement/FacultyManagement';
import CourseRegistration from './components/CourseRegistration/CourseRegistration';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './components/Login/Login';

const router = createBrowserRouter([
      {
        path: '/',
        element: <Login></Login>,
      },
      {
        path: '/student',
        element: <StudentDashboard></StudentDashboard>,
      },
      {
        path: '/faculty',
        element: <FacultyManagement></FacultyManagement>,
      },
      {
        path: '/course',
        element: <CourseRegistration></CourseRegistration>,
      },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)

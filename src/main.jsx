import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import FacultyManagement from './components/FacultyManagement/FacultyManagement';
import Home from './components/Home/Home';
import CourseRegistration from './components/CourseRegistration/CourseRegistration';
import { HelmetProvider } from 'react-helmet-async';
import Root from './components/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)

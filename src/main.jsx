import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import FacultyManagement from './components/FacultyManagement/FacultyManagement';
import CourseRegistration from './components/Course Registration/Course Registration';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
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
    <RouterProvider router={router} />
  </StrictMode>,
)

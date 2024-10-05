import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const students = [
    {
      id: 1,
      name: 'Alice Johnson',
      courses: [
        { id: 1, name: 'Web Development', grade: 'A', professor: 'John Doe', email: 'john.doe@university.edu' },
        { id: 2, name: 'Database Systems', grade: 'B+', professor: 'Jane Smith', email: 'jane.smith@university.edu' },
      ],
    },
    {
      id: 2,
      name: 'Bob Smith',
      courses: [
        { id: 1, name: 'Machine Learning', grade: 'A-', professor: 'Emily Johnson', email: 'emily.johnson@university.edu' },
        { id: 2, name: 'Artificial Intelligence', grade: 'B+', professor: 'Michael Clark', email: 'michael.clark@university.edu' },
      ],
    },
  ];

  const universityEvents = [
    { id: 1, title: 'Hackathon', date: 'October 20, 2024' },
    { id: 2, title: 'Exam Week', date: 'November 5-12, 2024' },
    { id: 3, title: 'Workshop on Python', date: 'December 1, 2024' },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeSection, setActiveSection] = useState('studentInfo');

  const toggleCourseDetails = (courseId) => {
    setSelectedCourse(selectedCourse === courseId ? null : courseId);
  };

  return (
    <div>
      <Helmet>
        <title>UMS | Student Dashboard</title>
        <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
      </Helmet>
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-[280px] bg-blue-600 text-white p-6">
          <h2 className="text-2xl font-semibold mb-6 playfair">Student Dashboard</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('studentInfo')}
                  className={`block w-full p-2 text-[16px] poppins rounded-lg ${activeSection === 'studentInfo' ? 'bg-blue-800' : 'bg-blue-600 hover:bg-blue-800'
                    }`}>
                  Student Information
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => setActiveSection('universityEvents')}
                  className={`block w-full p-2 text-[16px] poppins rounded-lg ${activeSection === 'universityEvents' ? 'bg-blue-900' : 'bg-blue-600 hover:bg-blue-800'
                    }`}>
                  University Events
                </button>
              </li>
              <hr className='border-dashed'/>
              <li className="mb-4 mt-5">
                <button
                  onClick={() => navigate('/faculty')}
                  className={`block w-full p-2 text-[16px] poppins rounded-lg ${activeSection === '/faculty' ? 'bg-blue-900' : 'bg-blue-600 hover:bg-blue-800'
                    }`}>
                  Faculty Management
                </button>
              </li>
              <li className="mb-4">
                <button
                  onClick={() => navigate('/course')}
                  className={`block w-full p-2 text-[16px] poppins rounded-lg ${activeSection === '/course' ? 'bg-blue-900' : 'bg-blue-600 hover:bg-blue-800'
                    }`}>
                  Course Registration
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-6">

          <div>
            <h1 className="text-5xl text-center font-semibold poppins">Student Portal</h1>
          </div>

          {/* Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeSection === 'studentInfo' && (
              <div className="col-span-2">
                {students.map((student) => (
                  <div key={student.id} className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4">{student.name}</h3>
                    <div className="space-y-4">
                      {student.courses.map((course) => (
                        <div
                          key={course.id}
                          className="bg-white p-4 rounded-lg border-2 border-blue-500 hover:shadow-lg transition-shadow">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="text-[18px] font-semibold">{course.name}</h4>
                              <p className="text-gray-600 text-[16px]">Grade: {course.grade}</p>
                            </div>
                            <button
                              onClick={() => toggleCourseDetails(course.id)}
                              className="text-blue-500 hover:underline focus:outline-none">
                              {selectedCourse === course.id ? 'Hide Details' : 'View Details'}
                            </button>
                          </div>
                          {selectedCourse === course.id && (
                            <div className="mt-3 text-[18px] text-gray-700">
                              <p><span className='font-semibold poppins'>Professor:</span> {course.professor}</p>
                              <p><span className='font-semibold poppins'>Contact:</span> {course.email}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === 'universityEvents' && (
              <div className="col-span-2">
                <h2 className="text-2xl font-semibold mb-4 poppins">University Events</h2>
                <div className="p-4 rounded-lg shadow-md border-2 border-blue-500">
                  <ul className="space-y-3 text-xl">
                    {universityEvents.map((event) => (
                      <li key={event.id} className="flex justify-between">
                        <span className="font-medium">{event.title}</span>
                        <span>{event.date}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

// src/pages/CourseRegistration.jsx
import React, { useState } from 'react';

const CourseRegistration = () => {
  // Course data
  const courses = [
    { id: 1, title: 'Introduction to Computer Science', code: 'CS101', professor: 'Dr. Emily Carter' },
    { id: 2, title: 'Advanced Mathematics', code: 'MATH201', professor: 'Dr. Mark Reynolds' },
    { id: 3, title: 'Organic Chemistry', code: 'CHEM301', professor: 'Dr. Sarah Johnson' },
    { id: 4, title: 'Quantum Physics', code: 'PHY401', professor: 'Dr. John Smith' },
  ];

  // State for form input and validation
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!studentName || !studentId || !selectedCourse) {
      setError('Please fill in all the fields.');
      return;
    }

    // If validation passes
    setError('');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white p-6 shadow-md mb-6">
        <h1 className="text-3xl font-semibold">Enroll in Courses</h1>
      </header>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Enrollment Successful!</h2>
            <p className="mt-4">Thank you, {studentName}. You have successfully enrolled in {selectedCourse}.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Enroll in another course
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Student Name</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your student ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Course</label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.title}>
                    {course.title} - {course.code} (Prof. {course.professor})
                  </option>
                ))}
              </select>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Enroll
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseRegistration;

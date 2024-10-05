import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const FacultyManagement = () => {

  const facultyList = [
    {
      id: 1,
      name: 'Dr. Emily Carter',
      designation: 'Professor of Computer Science',
      subject: 'Artificial Intelligence',
      officeHours: 'Mon, Wed, Fri: 10 AM - 12 PM',
      email: 'emily.carter@uni.edu',
    },
    {
      id: 2,
      name: 'Dr. Mark Reynolds',
      designation: 'Assistant Professor of Mathematics',
      subject: 'Calculus',
      officeHours: 'Tue, Thu: 1 PM - 3 PM',
      email: 'mark.reynolds@uni.edu',
    },
    {
      id: 3,
      name: 'Dr. Sarah Johnson',
      designation: 'Associate Professor of Chemistry',
      subject: 'Organic Chemistry',
      officeHours: 'Mon, Wed: 2 PM - 4 PM',
      email: 'sarah.johnson@uni.edu',
    },
    {
      id: 4,
      name: 'Dr. John Smith',
      designation: 'Lecturer of Physics',
      subject: 'Quantum Physics',
      officeHours: 'Fri: 10 AM - 1 PM',
      email: 'john.smith@uni.edu',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaculty, setExpandedFaculty] = useState(null);

  const filteredFaculty = facultyList.filter((faculty) =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFacultyDetails = (facultyId) => {
    setExpandedFaculty(expandedFaculty === facultyId ? null : facultyId);
  };

  return (
    <div className="min-h-screen p-6">
      <Helmet>
        <title>UMS | Faculty Management</title>
        <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
      </Helmet>      
      <div>
        <h1 className="text-5xl text-center font-semibold playfair">Faculty Overview</h1>
      </div>

      {/* Search */}
      <div className="mb-6 mt-5">
        <input
          type="text"
          placeholder="Search by name or subject"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-400"/>
      </div>

      {/* Faculty */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white p-6 rounded-lg border-2 border-gray-500 hover:shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{faculty.name}</h2>
                <p className="text-gray-600">{faculty.designation}</p>
                <p className="text-blue-600 font-medium">{faculty.subject}</p>
              </div>
              <button
                onClick={() => toggleFacultyDetails(faculty.id)}
                className="text-blue-500 hover:underline">
                {expandedFaculty === faculty.id ? 'Hide Info' : 'View Info'}
              </button>
            </div>


            {expandedFaculty === faculty.id && (
              <div className="mt-4 text-gray-700 leading-8">
                <p><span className='text-sm lg:text-lg font-semibold'>Office Hours:</span> {faculty.officeHours}</p>
                <p><span className='text-sm lg:text-lg font-semibold'>Contact:</span> {faculty.email}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyManagement;

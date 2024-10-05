// import React from 'react';
// import banner from '../../assets/images/banner.jpg';

// const Banner = () => {
//     const courses = ['Bachelor of Business Administration', 'Master of Business Administration', 'Master of Arts', 'Bachelor of Science', 'Bachelor of Laws', 'Master of Laws', 'Bachelor of Arts (BA) in English'];

//     return (
//         <div className="relative bg-cover bg-center h-[615px] text-white flex items-center justify-center"
//             style={{ backgroundImage: `url(${banner})` }}>
//             <div className="absolute inset-0 bg-black opacity-50"></div>

//             {/*  Bottom-left */}
//             <div className="absolute left-4 top-4 p-4 playfair text-yellow-400 z-10">
//                 <h2 className="text-4xl font-semibold ml-20">Choose the best</h2>
//                 <h2 className="text-4xl lg:mt-6 font-semibold ml-20">For Your Education</h2>
//             </div>

//             {/* Main centered content */}
//             <div className="text-center p-8 rounded-lg playfair text-yellow-300 z-10">
//                 <h1 className="text-6xl font-bold">Welcome to UMS</h1>
//                 <p className="mt-4 text-2xl">Join us to explore the world of knowledge and opportunities.</p>
//             </div>

//             {/* Top-right */}
//             <div className="absolute bottom-4 right-4 p-4 playfair text-yellow-400 lg:mr-10 z-10">
//                 <h2 className="text-4xl font-semibold">Courses We Offer</h2>
//                 <ul className="mt-2 space-y-1">
//                     {courses.map((course, index) => (
//                         <li key={index} className="text-lg">
//                             {course}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1>banner</h1>
        </div>
    );
};

export default Banner;

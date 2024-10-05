import { useState } from 'react';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import logo from '../../assets/images/logos.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#363636] text-white py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <FaBars className="text-xl" />
        </button>
      </div>

      {/* Logo */}
      <Link to={"/"}>
        <div className="flex items-center w-[80px] h-[80px] md:w-[100px] lg:w-[100px] lg:h-[80px] mt-4 md:mt-0 md:mr-10">
          <img src={logo} />
        </div>
      </Link>

      {/* Navigation */}
      <div className={`space-x-0 md:space-x-10 lg:space-x-28 text-lg poppins flex flex-col md:flex-row items-center justify-center absolute md:static w-[50%] md:w-auto bg-[#363636] md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-[85px]' : 'top-[-300px]'}`}>
        <a href="/" className="flex items-center space-x-3 py-2 md:py-0">
          <span>Home</span>
          <FaChevronDown className="text-xs" />
        </a>
        <a href="/student" className="flex items-center space-x-2 py-2 md:py-0">
          <span>Student Dashboard</span>
          <FaChevronDown className="text-xs" />
        </a>
        <a href="/faculty" className="flex items-center space-x-2 py-2 md:py-0">
          <span>Faculty Management</span>
          <FaChevronDown className="text-xs" />
        </a>
        <a href="/course" className="flex items-center space-x-2 py-2 md:py-0">
          <span>Course Registration</span>
          <FaChevronDown className="text-xs" />
        </a>
      </div>

    </div>
  );
};

export default Navbar;

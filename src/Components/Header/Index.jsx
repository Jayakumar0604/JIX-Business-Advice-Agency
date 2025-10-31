import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/Logo.png"; // Update path as needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const Nav = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Portfolio", link: "/portfolio" },
    { id: 4, name: "Pricing", link: "/pricing" },
    { id: 5, name: "Landing", link: "/landing" },
    { id: 6, name: "Blog", link: "/blog" },
    { id: 7, name: "Contact", link: "/contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="flex items-center justify-between px-5 md:px-10 py-4 shadow-md bg-white">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Jix Invest Logo" className="w-15" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-2xl text-green-700" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`text-sm font-medium ${
                currentPath === item.link
                  ? "text-[#0b69d4] font-semibold"
                  : "text-gray-800 hover:text-green-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <FiSearch className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" />
        </nav>
      </header>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          {Nav.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`block px-5 py-3 border-b ${
                currentPath === item.link
                  ? "text-[#0b69d4] font-semibold"
                  : "text-gray-800"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};

export default Header;
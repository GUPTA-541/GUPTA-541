import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use any icon library

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[#212121] px-6 py-3 opacity-90 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pinimg.com/736x/39/b5/0f/39b50fa26a918e6ee637069a57b552c9.jpg"
            alt="logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <p className="text-orange-500 font-bold text-3xl tracking-wide">CrowBar</p>
        </div>

        <div className="md:hidden text-orange-500">
          {menuOpen ? (
            <X size={32} onClick={toggleMenu} className="cursor-pointer" />
          ) : (
            <Menu size={32} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>

        
        <ul className="hidden md:flex gap-6 text-[#FF5722] font-semibold text-xl tracking-wide">
          <li className="hover:text-orange-300 cursor-pointer">Home</li>
          <li className="hover:text-orange-300 cursor-pointer">About Us</li>
          <li className="text-orange-300 cursor-pointer underline">Blog</li>
          <li className="hover:text-orange-300 cursor-pointer">Contacts</li>
        </ul>
      </div>





      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-[#FF5722] font-semibold text-lg tracking-wide">
          <li className="hover:text-orange-300 cursor-pointer">Home</li>
          <li className="hover:text-orange-300 cursor-pointer">About Us</li>
          <li className="text-orange-300 cursor-pointer underline">Blog</li>
          <li className="hover:text-orange-300 cursor-pointer">Contacts</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

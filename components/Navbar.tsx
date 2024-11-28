'use client';


import './Navbar.css';
import Link from "next/link";
import { NavItems } from "./NavItems";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (

    <>
    <div className="content relative lg:pb-[20px] lg:bg-orange-500">
      {/* Navbar */}

      
        
      {/* XL and large screens */}
      <div className="lg:block hidden">
        <div className="flex justify-around items-center h-[100%] pt-[20px]">
          <img
            src="https://cdn.dribbble.com/users/5177293/screenshots/18205359/media/cc8c416f225d78b8fc29014eba9aa356.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-s-full"
          />



          {/* Navigations */}
          {NavItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="navigat p-4 hover:bg-orange-400 rounded-2xl transition-all duration-300 text-white hover:text-black uppercase text-[18px] font-thin tracking-[2px]"
            >
              {item.title}
            </Link>
          ))}

          {/* Button */}
          <Link href={"https://github.com/Mudasic1"} className="bg-yellow-400 p-4 rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
            GITHub
          </Link>
        </div>
      </div>

      {/* SM and XS screens */}
      <div className="lg:hidden block">
        <div className="flex justify-between items-center pl-[20px] pr-[20px] pt-[10px]">
          <img
            src="https://cdn.dribbble.com/users/5177293/screenshots/18205359/media/cc8c416f225d78b8fc29014eba9aa356.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          {/* Dropdown toggle */}
          <CiMenuBurger
            className="cursor-pointer text-2xl text-black"
            onClick={toggleDropdown} // Open dropdown
          />
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute top-0 left-0 w-screen h-screen z-10 bg-black flex flex-col justify-center items-center gap-5 transition-all duration-300 ${
            isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Back button */}
          <button
            className="absolute top-3 end-2 bg-yellow-600 p-3 rounded-2xl text-white"
            onClick={() => setIsDropdownOpen(false)} // Close dropdown
          >
            Back
          </button>

          {/* Dropdown Links */}
          {NavItems.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="navigat2 text-white text-lg "
              onClick={() => setIsDropdownOpen(false)} // Close dropdown on link click
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Navbar;

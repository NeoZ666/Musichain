import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // Function to handle navigation
  function handleNavigation(to) {
    navigate(to);
  }

  return (
    <nav className="flex flex-col justify-around items-center pt-5 md:flex-row">
      <NavLink to="/" className="flex flex-row items-center">
        <img
          className="w-[50px]"
          src="./images/MUSICHAIN.png"
          alt="MUSICHAIN"
        />
        <p>MUSICHAIN</p>
      </NavLink>

      <ul className="flex gap-x-10 justify-center items-center">
        <li>
          <NavLink to="/artist">ARTISTS</NavLink>
        </li>
        <li>
          <NavLink to="/songs">SONGS</NavLink>
        </li>
        <li>
          <NavLink to="/upload">UPLOAD</NavLink>
        </li>
        <button
          onClick={() => handleNavigation("/signup")} // Corrected onClick handler
          className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
        >
          Get Started
        </button>
      </ul>

      <button
        onClick={() => handleNavigation("/signup")} // Corrected onClick handler
        className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block"
      >
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;

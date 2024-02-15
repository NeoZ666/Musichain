import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Retrieve user information from local storage
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     const parsedUserData = JSON.parse(storedUserData);
  //     setUserData(parsedUserData);
  //     console.log(parsedUserData);
  //   }
  // }, []);

  // Function to handle navigation
  function handleNavigation(to) {
    navigate(to);
  }

  // const handleLogout = () => {
  //   // Clear the localStorage
  //   localStorage.clear();
  //   window.location.reload();
  //   // Redirect the user to the login or signup page after logout
  //   toast.success("Logout successfull");
  //   navigate("/");
  // };

  return (
    <nav className="flex flex-col justify-around items-center pt-5 md:flex-row">
      <NavLink to="/" className="flex flex-row items-center">
        <img
          className="w-[50px]"
          src="./images/MUSICHAIN.png"
          alt="Musichain"
        />
        <p>Musichain</p>
      </NavLink>

      <ul className="flex gap-x-10 justify-center items-center">
        <li>
          <NavLink to="/artist">ARTISTS</NavLink>
        </li>
        <li>
          <NavLink to="/songs">SONGS</NavLink>
        </li>
      </ul>

      <button
        onClick={() => handleNavigation("/signup")} // Corrected onClick handler
        className="md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple"
      >
        Get Started
      </button>
    </nav>
  );
}

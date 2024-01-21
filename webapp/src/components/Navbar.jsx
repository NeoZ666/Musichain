import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user information from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      console.log(parsedUserData);
    }
  }, []);

  // Function to handle navigation
  function handleNavigation(to) {
    navigate(to);
  }

  const handleLogout = () => {
    // Clear the localStorage
    localStorage.clear();
    window.location.reload();
    // Redirect the user to the login or signup page after logout
    navigate("/");
  };

  return (
    <nav className="flex flex-col justify-around items-center pt-5 md:flex-row">
      <NavLink to="/" className="flex flex-row items-center">
        <img
          className="w-[50px]"
          src="./images/MUSICHAIN.png"
          alt="MusiChain"
        />
        <p>MusiChain</p>
      </NavLink>

      <ul className="flex gap-x-10 justify-center items-center">
        <li>
          <NavLink to="/artist">ARTISTS</NavLink>
        </li>
        <li>
          <NavLink to="/songs">SONGS</NavLink>
        </li>
        {userData && (
          <li>
            <NavLink to="/upload">UPLOAD</NavLink>
          </li>
        )}

        {userData ? (
          <div className="flex items-center">
            <h2 className="md:text-3xl block md:hidden">{userData?.name}</h2>
            <button
              onClick={handleLogout}
              className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => handleNavigation("/signup")} // Corrected onClick handler
            className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden"
          >
            Get Started
          </button>
        )}
      </ul>

      {userData?.name ? (
        <div className="flex items-center gap-x-5">
          <h2 className="md:text-3xl">{userData?.name}</h2>
          <button
            onClick={handleLogout}
            className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleNavigation("/signup")} // Corrected onClick handler
          className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block"
        >
          Get Started
        </button>
      )}
    </nav>
  );
}

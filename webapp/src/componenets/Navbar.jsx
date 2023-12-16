import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col justify-around items-center pt-5 md:flex-row">
      <div className="flex flex-row items-center">
        <img
          className="w-[50px]"
          src="./images/MUSICHAIN.png"
          alt="MUSICHAIN"
        />
        <p>MUSICHAIN</p>
      </div>

      <div className="flex gap-x-10 justify-center items-center">
        <p>ARTISTS</p>
        <p>UPLOAD</p>
        <button className="block md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:hidden">
          Get Started
        </button>
      </div>

      <button className="hidden md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple md:block">
        Get Started
      </button>
    </div>
  );
}

export default Navbar;

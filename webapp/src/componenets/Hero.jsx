import React from "react";
import './../../src/index.css'

function Hero() {
  return (
    <div className="my-[50px] md:my-[100px]">
      {/* GRADIENT DIV */}
      <div className="absolute top-[100px] w-[200px] h-[160px] -z-10 inset-0 gradient-01 md:w-[500px]"></div>

      <div className="flex flex-col justify-center mt-20 container mx-auto p-6 font-black md:items-center">
        {/* MAIN HEADING */}
        <h1
          className="text-[40px] text-left mb-6 leading-[1.2] md:text-[4.5rem] md:leading-snug md:items-center md:text-center md:-mt-14"
        >
          MAKE AND FIND YOUR  <br />{" "}
          <span className="text-lavender font-sans">MUSIC</span> SECURELY
        </h1>

        {/* SUB HEADING */}
        <p
          className="mb-8 text-left text-sm font-medium md:max-w-xl md:text-center md:text-lg "
        >
          Choose your musical style and start to lay down, record and share your mix in most secured way possible !!
        </p>

        {/* CALL TO ACTION */}
        <div className="pt-5 flex flex-col md:flex-row gap-3 md:gap-5 md:py-10">
          <button
            className="md:text-[20px] md:py-4 md:px-8 py-2 px-4 bg-gradient-to-r from-lavender via-pink-400 to-dark_purple rounded-xl text-slate-200 hover:bg-dark_purple active:bg-light_purple"
          >
            Get Started
          </button>
          <button
            // onClick={() => navigate("/experiences")}
            className="md:text-[20px] md:py-4 md:px-4 py-2 px-4 border-2 border-solid border-slate-200 rounded-xl bg-light_gray"
          >
            Explore more &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

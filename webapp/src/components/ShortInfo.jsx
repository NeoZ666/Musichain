import React from "react";

const ArtistScrollbar = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-5 mt-14 md:mt-0 md:mx-20 md:px-10 md:flex-row">
      <div>
        <h1 className=" text-3xl md:text-6xl md:w-[500px]">
          GET HOLD OF ALL YOUR FAVOURITE{" "}
          <span className="text-lavender font-sans font-bold">ARTIST</span> &{" "}
          <span className="text-lavender font-sans font-bold">SONGS</span>
        </h1>
        <p className="text-lg my-4 mr-3 w-[600px]">
        Elevate your senses with our diverse musical palette. Unleashing a symphony of genres, we curate sonic experiences that transcend boundaries and ignite passion
        </p>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row my-3 md:mt-0 gap-y-20 md:gap-x-5">
          <li className="w-[300px] h-[400px] object-contain">
            <img
              className="w-[280px] h-[400px] mx-auto object-cover rounded-3xl p-2 border border-slate-200"
              src="./images/Singer3.jpg"
              alt="MUSIC"
            />
            <p className="text-2xl text-center mt-2 font-bold">DRAKE</p>
          </li>
          <li className="w-[300px] h-[400px] object-contain">
            <img
              className="w-[280px] h-[400px] mx-auto object-cover rounded-3xl p-2 border border-slate-200"
              src="./images/Singer2.jpg"
              alt="MUSIC"
            />
            <p className="text-2xl text-center mt-2 font-bold">TAYLOR SWIFT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArtistScrollbar;

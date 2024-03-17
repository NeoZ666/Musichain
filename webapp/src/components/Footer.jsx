import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-20 mx-6 md:w-[80%] md:mx-auto md:mb-10">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl font-bold text-#FDFEFF md:text-4xl">
          ENTER THE SECURED MUSIC WORLD
        </h1>
      </div>

      <div className="rounded-xl my-5 w-full h-[1.2px] bg-slate-400"></div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <h3 className="text-2xl font-bold">MUSICHAIN</h3>
        <p>Copyright &copy; 2023 MusiChain. All rights reserved.</p>
      </div>
      <div className="my-5 flex gap-4">
        <FaTwitter size={23} />
        <FaLinkedin size={23} />
        <AiFillInstagram size={23} />
        <FaFacebook size={23} />
      </div>
    </div>
  );
}

export default Footer;

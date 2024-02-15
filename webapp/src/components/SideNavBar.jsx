import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SideNavBar() {
  const navigate = useNavigate();

  // Function to handle navigation
  // function handleNavigation(to){
  //   navigate(to);
  // }

  const handleLogout = () => {
    // Clear the localStorage
    localStorage.clear();
    toast.success("Logoged Out successfuly")
    // Redirect the user to the login or signup page after logout
    navigate("/");
  };

  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function dropDown() {
    setSubmenuOpen(!submenuOpen);
  }

  function Openbar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="bg-black relative z-[1000]">
      <span
        className="absolute text-black text-4xl -top-12 left-4 cursor-pointer"
        onClick={Openbar}
      >
        <RxHamburgerMenu />
      </span>
      <div
        className={`bg-black fixed top-0 bottom-0 lg:left-0 ${
          sidebarOpen ? "left-0" : "left-[-300px]"
        } duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen md:w-[300px]`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            {/* LOGO */}
            <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">
              Sollertia
            </h1>

            {/* CLOSE ICON */}
            <div className="block md:hidden ml-36" onClick={Openbar}>
              <IoMdClose size={30} />
            </div>
          </div>
          <hr className="my-2 text-gray-600" />

          <div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* END-TO-END PIPELINE ICON */}
              <NavLink
                to={"/dashboard/pipeline"}
                className="text-[15px] ml-4 text-gray-200"
              >
                Pipeline
              </NavLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* SONGS ICON */}
              <NavLink
                to={"/dashboard/songs"}
                className="text-[15px] ml-4 text-gray-200"
              >
                Songs
              </NavLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* UPLOAD MISUC ICON */}
              <NavLink
                to={"/dashboard/uploadmusic"}
                className="text-[15px] ml-4 text-gray-200"
              >
                Upload Music
              </NavLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* MUSIC ICON */}
              <NavLink
                to={"/dashboard/partners"}
                className="text-[15px] ml-4 text-gray-200"
              >
                Be Our Partners
              </NavLink>
            </div>
            <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* SUMMARIZE CONTRACTS ICON */}
              <NavLink
                to={"/dashboard/contract"}
                className="text-[15px] ml-4 text-gray-200"
              >
                Summarize Contracts
              </NavLink>
            </div>
            <div
              className="p-2.5 mt-2 flex items-end rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600"
              onClick={dropDown}
            >
              <i className="bi bi-chat-left-text-fill">H</i>
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
                <span
                  className={`text-xl font-bold ${
                    submenuOpen ? "" : "rotate-180"
                  }`}
                >
                  ^
                </span>
              </div>
            </div>
            <div
              className={`leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto ${
                submenuOpen ? "" : "hidden"
              }`}
            >
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Social
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Personal
              </h1>
              <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                Friends
              </h1>
            </div>

            <div className="absolute w-[94%] bottom-16 p-2.5 mt-2 flex bg-blue-300 items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
              {/* PROFILE */}
              <NavLink
                to={"/dashboard/artistprofile"}
                className="text-[15px]  ml-4 text-gray-200"
              >
                Profile
              </NavLink>
            </div>
            <div className="absolute w-[94%] bottom-2 p-2.5 mt-2 flex bg-red-300 items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-red-600">
              {/* END-TO-END PIPELINE */}
              <button
                onClick={handleLogout}
                className="text-[15px]  ml-4 text-gray-200"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;

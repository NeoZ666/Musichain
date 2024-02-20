import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function SideNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [role, setRole] = useState("");

  // ROLE ACCESS -
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      console.log(parsedUserData);

      setRole(parsedUserData.role);
    }
  }, []);

  const handleLogout = () => {
    // Clear the localStorage
    localStorage.clear();
    toast.success("Logged Out successfully");
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

          <ul>
            {/* ARTIST SIDEBAR LINKS */}
            {/* Write logic for - If role is not undefined then donot render only, if not undefined and equal to Artist then render something */}
            {role === "Artist" && (
              <>
                <NavLink
                  to={"/dashboard/pipeline"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* END-TO-END PIPELINE ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">Pipeline</div>
                </NavLink>
                <NavLink
                  to={"/dashboard/songs"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* SONGS ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">Songs</div>
                </NavLink>
                <NavLink
                  to={"/dashboard/uploadmusic"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* UPLOAD MUSIC ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">
                    Upload Music
                  </div>
                </NavLink>
                <NavLink
                  to={"/dashboard/partners"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* MUSIC ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">
                    Be Our Partners
                  </div>
                </NavLink>
                <NavLink
                  to={"/dashboard/contract"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* SUMMARIZE CONTRACTS ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">
                    Summarize Contracts
                  </div>
                </NavLink>
              </>
            )}

            {role === "Company" && (
              <>
                <NavLink
                  to={"/dashboard/allsongs"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* END-TO-END PIPELINE ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">Songs</div>
                </NavLink>
                <NavLink
                  to={"/dashboard/allartist"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  {/* SONGS ICON */}
                  <div className="text-[15px] ml-4 text-gray-200">Artists</div>
                </NavLink>
                {/* <NavLink
                  to={"/dashboard/uploadmusic"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  <div className="text-[15px] ml-4 text-gray-200">
                    Upload Music
                  </div>
                </NavLink>
                <NavLink
                  to={"/dashboard/partners"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  <div className="text-[15px] ml-4 text-gray-200">
                    Be Our Partners
                  </div>
                </NavLink>
                <NavLink
                  to={"/dashboard/contract"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-lavender/30" : ""
                    } p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer`
                  }
                >
                  <div className="text-[15px] ml-4 text-gray-200">
                    Summarize Contracts
                  </div>
                </NavLink> */}
              </>
            )}

            {/* BOOTOM SIDEBAR LINKS */}
            <li className="absolute w-[94%] bottom-16 p-2.5 mt-2 flex bg-blue-300 items-center rounded-md px-4 duration-300 cursor-pointer bg-purple  hover:bg-blue-600 hover:bg-dark_purple">
              {/* PROFILE */}
              {role === "Artist" && (
                <Link
                  to={"/dashboard/artistprofile"}
                  className="text-[15px]  ml-4 text-gray-200"
                >
                  PROFILE
                </Link>
              )}
              {role === "Company" && (
                <Link
                  to={"/dashboard/companyprofile"}
                  className="text-[15px]  ml-4 text-gray-200"
                >
                  PROFILE
                </Link>
              )}
            </li>
            <li className="absolute w-[94%] bottom-2 p-2.5 mt-2 flex bg-red-400 items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-red-600">
              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="text-[15px]  ml-4 text-gray-200"
              >
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNavBar;

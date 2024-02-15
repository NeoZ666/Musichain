// SIDEBARS AND LAYOUT FOR LINKING -
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/SideNavBar";

const Dashboard = () => {
  return (
    <div>
      <SideNavBar />
      <div className="mt-[60px] mx-5 md:mt-6 md:ml-[310px] md:mr-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

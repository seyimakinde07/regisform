import SideBarMenu from "../layout/side-bar-menu";
import TopBarMobile from "../layout/top-bar-mobile";
import { DashboardRouters } from "../../router/dashboard-routers";
import '../dashboard/dashboard.css'
import { useState } from "react";



const DashboardIndex = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("opened");
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="d-flex h-100">
      <div className={`${isOpen ? "sidebar-opened" : ""} sidebar-wrapper h-100`}>
        <SideBarMenu />
      </div>

      <div className="top-bar-mobile">
        <TopBarMobile
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div className="main-views-wrapper h-screen w-100">
        <main className="main-content h-100">
          <DashboardRouters />
        </main>
      </div>
    </div>
  );
};

export default DashboardIndex;

import { useState } from "react";
import { FaBullhorn, FaFolderOpen, FaHome, FaUsers } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { app_routes } from "../../router/routes";
import { loginOutUser } from "../../store/actions/auth-actions";
import { useDispatch } from "react-redux";
import HodLogo from "./hod-logo";

const SideBarMenu = () => {
  let location = useLocation();
  console.log(location);

  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setActiveNavLink = ({ isActive }: { isActive: boolean }) => {
    return isActive ? 'active d-flex align-items-center mb-3 mb-md-0 text-decoration-none' : 'd-flex align-items-center mb-3 mb-md-0 text-decoration-none';
  };

  return (
    <div className="h-100">
      <div className="sidebar d-flex flex-column p-3">
        <div className="sidebar-top">
          <Link to={app_routes.Dashboard.index} >
            <HodLogo
              width="90px"
              height="auto"
            />
          </Link>
        </div>

        <div className="sidebar-menus">
          <NavLink
            className={setActiveNavLink}
            to={app_routes.Dashboard.index}
            end
          >
            <FaHome className="pe-none" />
            Overview
          </NavLink>
          <NavLink
            className={`${location?.pathname?.includes("campaign") ? "active" : ""} d-flex align-items-center mb-3 mb-md-0 text-decoration-none`}
            to={app_routes.Dashboard.campaign.create_index}
          >
            <FaBullhorn className="pe-none" />
            Campaign
          </NavLink>
          <NavLink
            className="d-flex align-items-center mb-3 mb-md-0 text-decoration-none"
            to={app_routes.Dashboard.audience.create_index}
          >
            <FaUsers className="pe-none" />
            Audience
          </NavLink>
          <NavLink
            className="d-flex align-items-center mb-3 mb-md-0 text-decoration-none"
            to={app_routes.Dashboard.template.create_index}
          >
            <FaFolderOpen className="pe-none" />
            Template
          </NavLink>
        </div>

        <div className="sidebar-bottom">
          <hr className="line" />

          <a
            className="d-flex align-items-center mb-0 text-decoration-none logout"
            href="#logout"
            onClick={() => {
              loginOutUser()(dispatch);
              navigate(app_routes.authentication.sign_in)
            }}
          >
            <FiLogOut className="pe-none" />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;

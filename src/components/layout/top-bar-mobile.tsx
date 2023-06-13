import { Link } from 'react-router-dom'
import { app_routes } from '../../router/routes';
import HodLogo from "./hod-logo";
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';

const TopBarMobile = ({
    isOpen,
    toggleSidebar
}: {
    isOpen: Boolean,
    toggleSidebar: any
}) => {

    return (
        <div className="w-100 d-flex gap-4 justify-content-between align-items-center">
            <Link to={app_routes.Dashboard.index} >
                <HodLogo
                    width="45px"
                    height="auto"
                />
            </Link>

            <div
                className="sidebar-menu-toggler"
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <MdOutlineClose />
                ) : (
                    <MdOutlineMenu />
                )}
            </div>
        </div>
    )
}

export default TopBarMobile;

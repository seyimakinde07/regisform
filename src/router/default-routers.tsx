import { Route, Routes } from "react-router-dom";
import DashboardIndex from "../components/dashboard/dashboard-index";

function DefaultRouters() {
    return (
        <Routes>
                <Route path={'*'} element={<DashboardIndex />} />
        </Routes>
    )
}
export default DefaultRouters
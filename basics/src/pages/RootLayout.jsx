import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation/MainNavigation";

function RootLayout() {
    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    )
}

export default RootLayout;
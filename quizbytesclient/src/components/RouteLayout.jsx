import { Outlet } from "react-router-dom";

function RouteLayout() {
    return(
        <main className="App">
            <Outlet />
        </main>
    )
}

export default RouteLayout;
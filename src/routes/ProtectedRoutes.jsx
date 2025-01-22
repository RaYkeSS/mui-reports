import {Navigate, Outlet} from "react-router";

import {Context} from "../App.jsx";
import {useContext} from "react";


export const ProtectedRoutes = () => {
    const {user} = useContext(Context);

    const isLogin = user;

    if (!isLogin) {
        return <Navigate to="/login" replace />;
    }

    return (
        <Outlet />
    )
}
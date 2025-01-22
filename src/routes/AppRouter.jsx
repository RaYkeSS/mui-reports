import {Route, Routes} from "react-router";

import {HomePage, LoginPage, ReportPage, ResetPage, NotFoundPage} from "../pages";
import {ProtectedRoutes} from "./ProtectedRoutes.jsx";
import {INNER_ENDPOINTS} from "../utils/innerEndpoints.js";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={INNER_ENDPOINTS.home} element={<HomePage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path={INNER_ENDPOINTS.report} element={<ReportPage />} />
            </Route>
            <Route path={INNER_ENDPOINTS.login} element={<LoginPage />} />
            <Route path={INNER_ENDPOINTS.reset} element={<ResetPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
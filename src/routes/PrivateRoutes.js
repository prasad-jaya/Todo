import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../auth/AuthProvider";
import { useContext } from "react";

const PrivateRoutes = () =>{
    const {logedUser } = useContext(AuthContext);

    return logedUser.isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;   
}
export default PrivateRoutes;
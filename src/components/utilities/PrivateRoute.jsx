import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { tokenAccess } = UserAuth();

    console.log(tokenAccess);
    if (tokenAccess === '') {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
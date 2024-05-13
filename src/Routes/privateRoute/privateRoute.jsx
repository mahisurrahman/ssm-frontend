/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProviders";
import { Navigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const privateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if(user){
    return children;
  }

  if(loading){
    return <Loading></Loading>
  }

  return <Navigate to="/login"></Navigate>

};

export default privateRoute;

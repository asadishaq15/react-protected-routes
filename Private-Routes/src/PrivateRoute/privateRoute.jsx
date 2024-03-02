// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../Context/authContext';


const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);
  
    if (isAuthenticated) {
      return children;
    }
  
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  };
  
  export default PrivateRoute;

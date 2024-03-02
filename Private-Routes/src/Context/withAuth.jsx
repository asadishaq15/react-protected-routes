import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './authContext';


const withAuth = (Component) => {
    const AuthRoute = (props) => {
      const { isAuthenticated } = useContext(AuthContext);
  
      if (!isAuthenticated) {
        return <Navigate to="/login" />;
      }
  
      return <Component {...props} />;
    };
  
    return AuthRoute;
  };

export default withAuth;

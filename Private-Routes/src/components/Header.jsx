import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/authContext';




const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logging out...");
    navigate('/');
  };
  

  return (
    <div className="header">
      <div>
        <Link id="header-logo" to="/">
          LOGO
        </Link>
      </div>

      <div className="links--wrapper">
        {isAuthenticated ? (
          <>
            <Link to="/" className="header--link">
              Home
            </Link>
            <Link to="/profile" className="header--link">
              Profile
            </Link>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

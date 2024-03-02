// Login.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic goes here
    login(); // Simulated login
    navigate('/dashboard');
  };

  return (
    <div className="container">
    <h2>Login Page</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-field-wrapper">
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleInputChange} 
          placeholder="Enter email..."
          required
        />
      </div>
      <div className="form-field-wrapper">
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleInputChange} 
          placeholder="Enter password..."
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <Link to="/register">Register</Link></p>
  </div>
  );
};

export default Login;

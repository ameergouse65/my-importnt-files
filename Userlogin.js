import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Userlogin.css'; // Import CSS file

const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Here you can handle the login logic, such as sending a request to the backend API
    // For simplicity, let's assume login is successful if email and password are not empty
    console.log('Login submitted with:', { email, password });
    
    // Navigate to the daycare page if login is successful
    navigate("/Daycare");
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
        <h4>Login</h4>
          <label>Email:</label>
         
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Userlogin;

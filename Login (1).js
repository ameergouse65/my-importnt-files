import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    pwd: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, pwd } = formData;
  
    try {
      const response = await fetch('http://localhost:9000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pwd }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed: Unexpected response');
      }
      
      const loginResponseText = await response.text();
  
      if (loginResponseText === "login success") {
        
        const userDetailsResponse = await fetch(`http://localhost:9000/api/users/getByEmail/${email}`);
        if (!userDetailsResponse.ok) {
          throw new Error('Failed to fetch user details');
        }
        
        const userDetails = await userDetailsResponse.json();
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        
      
        navigate('/profile', { state: { userDetails } }); 
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(`Error! ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="pwd" value={formData.pwd} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;

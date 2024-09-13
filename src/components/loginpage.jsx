

// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/users`, userData);


// src/api.js
//export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);



// src/components/LoginPage.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '/Users/sayanb3/Projects/Event-scheduler/api.js';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const { token } = response.data;
      localStorage.setItem('apiToken', token);
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
      navigate('/create-event');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-red-400 to-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
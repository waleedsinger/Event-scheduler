
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

//export const registerUser = (userData) => axios.post(`${API_BASE_URL}/users`, userData);

// src/components/SignUpPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '/Users/sayanb3/Projects/Event-scheduler/api.js';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      console.log('Attempting to register user:', { email, password });
      await registerUser({ email, password });
      navigate('/login');
    } catch (err) {
      console.error('Error during registration:', err);
      if (err.response) {
        // Server responded with a status other than 2xx
        setError('Error signing up: ' + (err.response.data.message || 'Invalid request'));
      } else if (err.request) {
        // Request was made but no response received
        setError('Error signing up: No response from server');
      } else {
        // Something else happened
        setError('Error signing up: ' + err.message);
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>

        {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
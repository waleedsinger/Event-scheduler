// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const registerUser = (userData) => axios.post(`${API_BASE_URL}/users`, userData);


// src/api.js
export const createEvent = (eventData, token) => axios.post(`${API_BASE_URL}/events`, eventData, {
headers: { Authorization: `Bearer ${token}` },
});





// src/components/CreateEventPage.jsx
import React, { useState } from 'react';
//import { createEvent } from '/Users/sayanb3/Projects/Event-scheduler/api.js';
import { useNavigate } from 'react-router-dom';

function CreateEventPage() {
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [date, setDate] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
const token = localStorage.getItem('apiToken');

if (!token) {
    setError('You must be logged in to create an event.');
    return;
}

try {
    await createEvent({ name, description, date }, token);
    navigate('/');
} catch (err) {
    setError('Error creating event');
}
};

return (
<div className="flex items-center justify-center h-screen bg-gradient-to-b from-green-400 to-gray-700">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Event</h2>

    {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Event Name"
        className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <textarea
        placeholder="Description"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <input
        type="date"
        className="w-full p-3 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
        <button
        type="submit"
        className="w-full bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
        >
        Create Event
        </button>
    </form>
    </div>
</div>
);
}

export default CreateEventPage;
// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Update with your API base URL

export const fetchEvents = () => axios.get(`${API_BASE_URL}/events`);
export const fetchEventDetails = (id) => axios.get(`${API_BASE_URL}/events/${id}`);
export const registerUser = (userData) => axios.post(`${API_BASE_URL}/register`, userData);
export const loginUser = (userData) => axios.post(`${API_BASE_URL}/login`, userData);
export const createEvent = (eventData, token) => axios.post(`${API_BASE_URL}/events`, eventData, {
headers: { Authorization: `Bearer ${token}` },
});
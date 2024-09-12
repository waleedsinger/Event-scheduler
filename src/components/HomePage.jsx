// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchEvents } from '/Users/sayanb3/Projects/Event-scheduler/api.js';

import { Link } from 'react-router-dom';

function HomePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="card">
            <h2 className="text-xl">{event.name}</h2>
            <p>{event.description}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
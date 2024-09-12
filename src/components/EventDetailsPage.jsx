// src/components/EventDetailsPage.jsx
import React from 'react';

function EventDetailsPage({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">{event.title}</h2>
        <p>{event.description}</p>
        <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded">Close</button>
      </div>
    </div>
  );
}

export default EventDetailsPage;

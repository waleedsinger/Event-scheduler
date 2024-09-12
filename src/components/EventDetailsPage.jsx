// src/components/EventDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventDetails } from '/Users/sayanb3/Projects/Event-scheduler/api.js';

function EventDetailsPage() {
const { id } = useParams();
const [event, setEvent] = useState(null);

useEffect(() => {
fetchEventDetails(id)
    .then(response => setEvent(response.data))
    .catch(error => console.error('Error fetching event details:', error));
}, [id]);

if (!event) return <div>Loading...</div>;

return (
<div className="container mx-auto">
    <h1 className="text-2xl font-bold mb-4">{event.name}</h1>
    <p>{event.description}</p>
    <p>Date: {event.date}</p>
</div>
);
}

export default EventDetailsPage;
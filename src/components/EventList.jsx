// src/components/EventList.jsx
import React from 'react';
import EventCard from './EventCard';

function EventList({ events, onEventClick }) {
  return (
    <div className="p-4">
      {events.map((event) => (
        <EventCard key={event.id} event={event} onClick={onEventClick} />
      ))}
    </div>
  );
}

export default EventList;

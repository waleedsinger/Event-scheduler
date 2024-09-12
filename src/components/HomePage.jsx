// src/components/HomePage.jsx
import { useEffect, useState } from "react";
import Header from "./Header";
import EventList from "./EventList";
import CreateEventPage from './CreateEventPage';
import EventDetailsPage from './EventDetailsPage';

function HomePage() {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  const handleAddEventClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSaveEvent = (event) => {
    setEvents([...events, event]);
    setIsModalOpen(false);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseEventDetails = () => {
    setSelectedEvent(null);
  };

  const handleLogoutClick = () => {
    // Perform any logout operations here, e.g., clearing tokens
    console.log("Logging out");
    // You might want to handle actual logout logic or redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-gray-700">
      <Header 
        onAddEventClick={handleAddEventClick} 
        onLogoutClick={handleLogoutClick} 
      />
      <div className="container mx-auto p-4">
        <EventList events={events} onEventClick={handleEventClick} />
      </div>
      <CreateEventPage isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveEvent} />
      <EventDetailsPage event={selectedEvent} onClose={handleCloseEventDetails} />
    </div>
  );
}

export default HomePage;


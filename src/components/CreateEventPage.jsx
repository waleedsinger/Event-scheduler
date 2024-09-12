// src/components/CreateEventPage.jsx
import React, { useState } from 'react';

function CreateEventPage({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const newEvent = { title, description };
    onSave(newEvent);
    setTitle('');
    setDescription('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">Create Event</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          className="border p-2 mb-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          className="border p-2 mb-2 w-full"
        />
        <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">Save</button>
        <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded ml-2">Close</button>
      </div>
    </div>
  );
}

export default CreateEventPage;

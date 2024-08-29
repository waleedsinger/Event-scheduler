import React, { useState } from "react";
import { translations } from "./translations"; // Import your translations

const Sidebar = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const handleTranslate = (lang) => {
    setLanguage(lang); // Set the current language
  };

  return (
    <div className="w-64 h-screen bg-gray-800 flex flex-col p-4">
      <div className="mb-8">
        <img src="logo.png" alt="Logo" className="h-50" />
      </div>
      <div className="space-y-4">
        <button onClick={() => handleTranslate("de")} className="text-white">
          Deutsch
        </button>
        <button onClick={() => handleTranslate("en")} className="text-white">
          English
        </button>
      </div>
      <div>
        <p>{translations[language].movieNotes}</p>
        <p>{translations[language].home}</p>
        <p>{translations[language].popularMovies}</p>
        <p>{translations[language].journal}</p>
        {/* Add more translated elements here */}
      </div>
    </div>
  );
};

export default Sidebar;
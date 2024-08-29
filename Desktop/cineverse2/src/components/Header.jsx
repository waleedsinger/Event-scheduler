import React, { useState } from "react";
import { translations } from "./translations"; // Adjust the import path as necessary

const Header = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const handleTranslate = (lang) => {
    setLanguage(lang); // Set the current language
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            {translations[language].home}
          </a>
          <a href="/journal" className="hover:text-gray-400">
            {translations[language].journal}
          </a>
        </div>
        <div>
          <button onClick={() => handleTranslate("de")} className="text-white">
            Deutsch
          </button>
          <button onClick={() => handleTranslate("en")} className="text-white">
            English
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
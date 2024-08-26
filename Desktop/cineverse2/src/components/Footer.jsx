import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          Powered by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            TMDb
          </a>
        </p>
        <p>&copy; 2024 Cineverse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
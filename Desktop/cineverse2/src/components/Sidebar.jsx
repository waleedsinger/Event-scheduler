// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 flex flex-col p-4">
          <div className="mb-8">
            <img src="logo.png" alt="Logo" className="h-50"  />
          </div>
          <div className="space-y-4">
            <a href="/journal" className="flex items-center space-x-2 hover:text-gray-400">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 5h-14c-1.104 0-2 .896-2 2v1h-3v12h3v1c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 14h-4v-10h4v10zm6-7h-4v10h4v-10z"></path>
              </svg>
              <span>Movie notes</span>
            </a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold mb-2">Create your first watchlist</h3>
            <p className="text-sm text-gray-400 mb-4">It&rsquo;s easy, we&apos;ll help you</p>
            <button className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200">
              Create watch list
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Let&rsquo;s find some TV Shows</h3>
            <p className="text-sm text-gray-400 mb-4">We&rsquo;ll keep you updated on new shows</p>
            <button className="w-full bg-white text-black font-bold py-2 rounded-lg hover:bg-gray-200">
              Browse TV Shows
            </button>
          </div>
         <div className="text-gray-500 text-xs mt-8 space-y-1">
            <button className="block hover:text-white" onClick={() => {}}>
              Legal
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              Safety & Privacy Center
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              Privacy Policy
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              Cookies
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              About Ads
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              Accessibility
            </button>
            <button className="block hover:text-white" onClick={() => {}}>
              Notice at Collection
            </button>
          </div>
          {/* Language Buttons */}
          <div className="mt-8">
            <button className="flex items-center space-x-2 text-white bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <span>English</span>
            </button>
          </div>
          <div className="mt-8">
            <button className="flex items-center space-x-2 text-white bg-gray-800 p-2 rounded-lg hover:bg-gray-700">
              <span>Deutsch</span>
            </button>
          </div>
        </div>
      );
    };
    
    export default Sidebar;
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import CreateEventPage from "./components/CreateEventPage";
import EventDetailsPage from "./components/EventDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Chatbot from "./components/Chatbot"; // Import the Chatbot component
import "./App.css"; // Import the App.css

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route
          path="/create-event"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CreateEventPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Chatbot /> {/* Ensure the Chatbot component is rendered */}
    </Router>
  );
}

export default App;

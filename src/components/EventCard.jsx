// EventCard.jsx
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
        <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
      </div>
    </Link>
  );
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};

export default EventCard;

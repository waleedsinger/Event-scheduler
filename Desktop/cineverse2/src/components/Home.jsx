import React from 'react';
import { translations } from '../translations'; // Import translations

const Home = ({ language }) => {
return (
<div>
    <h1>{translations[language].popularMovies}</h1>
    {/* Add more translated elements here */}
</div>
);
};

export default Home;
import React from 'react';
import { translations } from '../translations'; // Import translations

const Journal = ({ language }) => {
return (
<div>
    <h1>{translations[language].journal}</h1>
    {/* Add more translated elements here */}
</div>
);
};

export default Journal;
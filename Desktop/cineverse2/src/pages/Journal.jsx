// src/pages/Journal.jsx
import React, { useState } from 'react';  
import Sidebar from '../components/Sidebar';  
import PropTypes from 'prop-types';  

const Journal = ({ movies }) => {  
    const [movieNotes, setMovieNotes] = useState([]);  

    return (  
        <div className="flex">  
            <Sidebar />  
            <div className="container mx-auto mt-5">  
                <h1 className="text-3xl mb-8">Movie Journal</h1>  
                <div id="favoriteMovies">  
                    {movies.map((movie, index) => (  
                        <div key={index} className="mb-4 p-4 border rounded">  
                            <h2 className="text-xl">{movie.title}</h2>  
                            <p>{movie.description}</p>  
                            <button onClick={() => setMovieNotes([...movieNotes, movie.title])}>  
                                Add Note  
                            </button>  
                        </div>  
                    ))}  
                </div>  
                <div>  
                    <h2 className="text-2xl mt-8">My Movie Notes</h2>  
                    <ul>  
                        {movieNotes.map((note, index) => (  
                            <li key={index}>{note}</li>  
                        ))}  
                    </ul>  
                </div>  
            </div>  
        </div>  
    );  
};  

Journal.propTypes = {  
    movies: PropTypes.array.isRequired,  
};  

export default Journal;

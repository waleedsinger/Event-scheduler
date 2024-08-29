import  { useState, useEffect } from 'react';  
import Sidebar from '../components/Sidebar';  

const Journal = () => {  
    const [tvShows, setTvShows] = useState([]);  
    const [tvShowNotes, setTvShowNotes] = useState([]);  

    useEffect(() => {  
        const fetchTvShows = async () => {  
            const options = {  
                method: 'GET',  
                headers: {  
                    accept: 'application/json',  
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGUyYWIwZTFlNDgzN2VhMDEzNTVlZmY1ZGI2OTcyMyIsIm5iZiI6MTcyNDY3MzAxNS4xODU1MjcsInN1YiI6IjY2YjljNmI1NzQzN2UxMzc4ZjA1ZmJkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gvcnZOYRGlMq9rEswYKIB8dr6a4sWpxPlMRceYYMunw', // Replace with a valid token  
                },  
            };  

            try {  
                const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);  
                const data = await response.json();  
                setTvShows(data.results || []); // Assuming response has a 'results' field for the shows  
            } catch (err) {  
                console.error(err);  
            }  
        };  

        fetchTvShows();  
    }, []); // Empty dependency array ensures this runs once on mount  

    return (  
        <div className="flex">  
            <Sidebar />  
            <div className="container mx-auto mt-5">  
                <h1 className="text-3xl mb-8">TV Show Journal</h1>  
                <div id="popularTvShows">  
                    {tvShows.map((show) => (  
                        <div key={show.id} className="mb-4 p-4 border rounded">  
                            <h2 className="text-xl">{show.name}</h2>  
                            <p>{show.overview}</p>  
                            <button onClick={() => setTvShowNotes([...tvShowNotes, show.name])}>  
                                Add Note  
                            </button>  
                        </div>  
                    ))}  
                </div>  
                <div>  
                    <h2 className="text-2xl mt-8">My TV Show Notes</h2>  
                    <ul>  
                        {tvShowNotes.map((note, index) => (  
                            <li key={index}>{note}</li>  
                        ))}  
                    </ul>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default Journal;

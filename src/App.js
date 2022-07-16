import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

import MovieCard from './components/MovieCard';

import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=[your api key]';

export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const resJson = await response.json();

        setMovies(resJson.Search);
    };

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    type='text'
                    value={searchTerm}
                    placeholder='Search for movies'
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button onClick={() => searchMovies(searchTerm)}>
                    <FiSearch />
                </button>
            </div>

            {movies.length > 0 ? (
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.imdbID}/>
                    ))}
                </div>
            ) : (
                <div className='empty'>
                    <h2>Not found</h2>
                </div>
            )}
        </div>
    );
}

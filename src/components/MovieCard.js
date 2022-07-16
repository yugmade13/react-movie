import React from "react";

import './MovieCard.css'

export default function MovieCard({ movie }) {
    const { imdbID, Year, Poster, Title, Type } = movie;

    return (
        <div className='movie'>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== 'N/A' ? Poster: 'https://via.placeholder.com/400'} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
}

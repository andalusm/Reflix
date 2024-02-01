import React from 'react'
import { useParams } from 'react-router';
import { CATALOGS } from '../Constants';


export default function MovieDetails() {
    const { movieID } = useParams();
    const movie = CATALOGS.find(m => m.id === Number(movieID));
    console.log(movie)
    
    return (
        <div >
            <h2>{movie.title}({movie.year})</h2>
            <img className='movieImg' src={movie.img}></img>
            <p className='movieDetail'>{movie.descrShort}</p>

        </div>
    )
}

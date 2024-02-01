import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Link } from 'react-router-dom';


export default function Movie({ movie, rentMovie,rented}) {
    return (
        <>
            <div className='movie'>
                <div class="rentButton" onClick={()=> rentMovie(movie.id)}>
                    {rented ? <RemoveCircleIcon></RemoveCircleIcon> : <AddCircleIcon></AddCircleIcon>}
                </div>
                <Link to={"/movies/"+movie.id}>
                <img src={movie.img}></img>
                </Link>
            </div>
        </>
    )
}

import React, { useState } from 'react'
import MovieDetails from './MovieDetails';
import Movie from './Movie';
import { Autocomplete, TextField } from '@mui/material';

export default function Catalog({ catalogs, rentMovie, user }) {
    const [text, setText] = useState("")

    const updateText = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }
    const includesSearch = function (movie) {
        return movie.title.toLowerCase().includes(text.toLowerCase())
    }
    const isRented = function (movie) {
        return user.rented.includes(movie.id)
    }
    const titles =[... new Set(catalogs.map(m=>m.title))]
    return (
        <div>
            <div className='catalogBar'>
                {/* <input type='text' value={text} onChange={updateText}></input> */}
                <div id="search-movie">
                <Autocomplete
                    disablePortal
                    id="search-movie"
                    options={titles}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField sx={{ color:'darkgray'}} onChange={updateText} {...params} value={text} label="Search movie" />}
                />
                </div>
                <div>{user.budget}$</div>
            </div>
            <div>
                <h3>Rented:</h3>
                <div className='movies'>
                    {catalogs.filter(m => isRented(m) && includesSearch(m)).map(m => <Movie key={m.id} movie={m} rented={isRented(m)} rentMovie={rentMovie}></Movie>)}
                </div>
            </div>
            <div>
                <h3>Catalog:</h3>
                <div className='movies'>
                    {catalogs.filter(m => includesSearch(m)).map(m => <Movie key={m.id} rented={isRented(m)} movie={m} rentMovie={rentMovie}></Movie>)}
                </div>
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import axios from './axios';
import request from './Request';
import './Banner.css'

function Banner() {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchNetflixOriginals);
            const movies = response.data.results;
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            setMovies(randomMovie);
        }
        fetchData();
    }, []);
function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+"...":str
}

    return (
        <header className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner__button'>Play </button>
                    <button className='banner__button'>My List </button>
                </div>
                <h1 className='banner_description'> {truncate(movie?.overview,150)} </h1>
            </div>
            <div className='banner--fadeBottom'/>
        </header>
    )
}

export default Banner;
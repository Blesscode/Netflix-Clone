import React, { useEffect, useState } from 'react'
import axios from './axios';
import request from './request';
import './Banner.css';

function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const requests=await axios.get(request.fetchNetflixOriginal);
            setMovie(requests.data.results[Math.floor(Math.random() * requests.data.results.length)]);
            return requests;
        } fetchData();
    },[]);

    function truncateString(str, num) {
        return str?.length > num ?
           str.substr(0, num-1) + "...":
        str;
        
      }
   
  return (
    <header className="banner"
     style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
     )`,
     backgroundPosition: "centre centre",}}
     >

    <div className="banner_conatents">
        {/*title */}
        <h1 className="banner_title">{movie?.title ||movie?.name||movie?.original_name }</h1>
    {/* div for 2 button*/}
    <div className="banner_buttons">
    <button className="banner_button">Play</button>
    <button className="banner_button">My List</button>
    </div>

    {/* desc*/}
    <h1 className="banner_description">{truncateString(movie?.overview,150)}</h1>
    
    </div>
    <div className="banner--fadeBottom"></div>


    </header>
    
  )
}

export default Banner

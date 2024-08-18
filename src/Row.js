import React, { useState,useEffect } from 'react';
import axios from './axios';
import './Row.css';


const base_url="http://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl, isLargeRow}) {
     //to keep tract of movies :state 
    const [movies,setmovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    //snipit of code that run on the base of condition
    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setmovies(request.data.results);
           // console.log(request);
            return request;
        } fetchData();
    },[fetchUrl]); //everything added outside from useEffect is added as dependent
    //everytime the row load this snipt wil runs so we can feed it with the row data
    //everytime the var movie changes this code will run
    //console.log(movies);
    
  return (
    <div className="row">
      <h2>{title}</h2>

     
      <div className="row_containers">
        {/* several row-posters */}
        {movies.map((movie) =>(<img key={movie.id} className={`row_container ${isLargeRow && "row_containerLarge"}`} src={`${base_url}${ isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>))}
      </div>
      
    </div>
  )
}

export default Row

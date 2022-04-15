import React, { useEffect,useState } from "react";
// import { imageUrl } from '../../constants';
import axios from "../../axios";
import "./Banner.css";

function Banner() {
  const [movie,setMovie] =useState([])
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=7d3a6e1310d289aee91adb4bea239d1b&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() *response.data.results.length-1)]);
        // console.log(response.data.results);
      });
  }, []);
  return (
    <div 
    style={{backgroundImage: `url(${movie?  'https://image.tmdb.org/t/p/original'+movie.backdrop_path:""})`}}className="banner">
      <div className="content">
        <h1 className="Banner_heading">{movie? movie.title:""}</h1>

        <div className="banner_btn">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="Desc">{movie?movie.overview:""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost"
import Footer from './Footer'

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={'https://api.themoviedb.org/3/discover/tv?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_networks=213'}title='Series'/>
      <RowPost url={'https://api.themoviedb.org/3/discover/movie?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_genres=28'} title='Action' isSmall/>
      
      
      <RowPost url={'https://api.themoviedb.org/3/discover/movie?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_genres=27'} title='Horror' isSmall/>
      <RowPost url={'https://api.themoviedb.org/3/discover/movie?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_genres=10749'} title='Romance' isSmall/>
      <RowPost url={'https://api.themoviedb.org/3/discover/movie?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_genres=35'} title='Comedy' isSmall/>
      <RowPost url={'https://api.themoviedb.org/3/discover/movie?api_key=7d3a6e1310d289aee91adb4bea239d1b&with_genres=99'} title='Fantasy' isSmall/>
      
    
    </div>
  );
}

export default App;

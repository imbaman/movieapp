import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Poster from "./Poster/Poster";
import "./App.css";
import MovieList from "./MovieList/MovieList";

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Poster />
      <MovieList />
    </div>
  );
}

export default App;

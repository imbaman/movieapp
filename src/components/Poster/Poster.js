import "./Poster.css";
import { useState, useEffect } from "react";
import { requests, instance } from "../../api";

const Poster = () => {
  const [movie, setMovie] = useState([]);
  const fetchMovie = async () => {
    const response = await instance(requests.upcomingMovies);
    setMovie(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]
    );

    console.log(response.data.results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const img_api = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      {movie ? (
        <header
          className='banner'
          style={{
            backgroundImage: `url(${img_api}${movie.backdrop_path})`,
          }}>
          <div className='banner__contents'>
            <h1 className='banner__title'>{movie?.title}</h1>
            <button className='banner__button'>Details</button>{" "}
            <h1 className='banner__overview'>{movie.overview}</h1>
          </div>
          <div className='banner__fadeBottom ' />
        </header>
      ) : (
        <div style={{ maxWidth: "100%", height: "80vh" }}>
          <h1
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            Loading...
          </h1>
        </div>
      )}
    </>
  );
};
export default Poster;

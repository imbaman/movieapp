import { useEffect, useState } from "react";
import { instance } from "../../api";
import "./MovieRow.css";

const MovieRow = ({ genre, api }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const response = await instance.get(api);
    // console.log(response.data.results);
    setMovie(response.data.results);
    // return response;
  };

  const img_api = "https://image.tmdb.org/t/p/w185";

  return (
    <>
      <h2>{genre}</h2>
      <div className='container movie-row'>
        {movie
          .map((movie) => (
            <div className='movie'>
              <img src={img_api + movie.poster_path} alt='' />
              <p>{movie.vote_average}</p>
              <p>{movie.title}</p>
            </div>
          ))
          .slice(0, 12)}
      </div>
    </>
  );
};

export default MovieRow;

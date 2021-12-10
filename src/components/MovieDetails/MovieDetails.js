import { useEffect, useState } from "react";
import { instance } from "../../api";
import "./MovieDetails.css";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState("");
  const img = "https://image.tmdb.org/t/p/w185";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(
        `/movie/${match.params.id}?&append_to_response=videos,similar,credits`
      );
      setMovie(response.data);
      console.log(response.data);
      return response;
    };
    fetchMovies();
  }, []);

  return (
    <div className='container details'>
      <div className='details__left'>
        <h3>{movie.title}</h3>
        <div className='score-container'>
          {" "}
          <p
            className={`score  ${
              movie.vote_average > 6 ? "score-up" : "score-low"
            }`}>
            {movie.vote_average}
          </p>
          <p className='border'>based on {movie.vote_count} counts</p>
        </div>

        <p>RELEASE DATE : {movie.release_date}</p>
      </div>
      <div className='details__right'>
        <img src={img + movie.poster_path} alt='' />
      </div>
    </div>
  );
};

export default MovieDetails;

import { useEffect, useState } from "react";
import { instance } from "../../api";
import "./MovieDetails.css";
import ReactPlayer from "react-player";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState("");
  const [trailer, setTrailer] = useState([]);
  const img = "https://image.tmdb.org/t/p/w185";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(
        `/movie/${match.params.id}?&append_to_response=videos,similar,credits`
      );

      const filteredTrailer = response.data.videos.results
        .filter((movie) => {
          return movie?.type === "Trailer";
        })
        .slice(0, 1);

      setTrailer(filteredTrailer);
      setMovie(response.data);
      console.log(response.data);
      console.log(trailer);
      return response;
    };
    fetchMovies();
  }, []);

  return (
    <div className='container main'>
      <div className='container details'>
        <div className='details__left'>
          <h3>{movie.title}</h3>
          <div className='score-container'>
            <p
              className={`score  ${
                movie.vote_average > 6 ? "score-up" : "score-low"
              }`}>
              {movie.vote_average}
            </p>
            <p className='border'>based on {movie.vote_count} counts</p>
          </div>
          <div className='desc-container'>
            <p>{movie.overview}</p>
          </div>
          <p>RELEASE DATE : {movie.release_date}</p>
        </div>
        <div className='details__right'>
          <img src={img + movie.poster_path} alt='' />
        </div>
      </div>
      <div className='player'>
        {trailer.length !== 0 ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer[0].key}`}
            width='100%'
            height='100%'
          />
        ) : (
          <div>no trailer</div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

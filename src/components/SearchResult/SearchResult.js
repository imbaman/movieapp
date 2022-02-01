import { useHistory, Link } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = ({ search }) => {
  const history = useHistory();
  const movieData = history.location.movies;
  const img = "https://image.tmdb.org/t/p/w185";

  console.log(movieData);

  return (
    <>
      {movieData?.length === 0 ? (
        <div class='no-results'>No results</div>
      ) : (
        <h2 className='results'>
          Top Results for <span className='bold'>"{search}"</span>
        </h2>
      )}

      {movieData ? (
        movieData
          .filter((movie) => {
            return movie.poster_path !== null || "" || undefined;
          })
          .map((movie) => (
            <div>
              <div className='searchResult'>
                <div className='searchResult__img'>
                  <img src={img + movie.poster_path} alt='poster' />
                </div>
                <div className='searchResult__text'>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/movie/${movie.id}`}>
                    <h3>{movie.title}</h3>
                  </Link>

                  <small>{movie.release_date}</small>
                  <p>{movie.overview}</p>
                </div>
                <div className='searchResult__score'>
                  <p
                    className={`score
                  ${movie.vote_average > 6 ? "score-up" : "score-low"}
                `}>
                    {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))
      ) : (
        <div className='no-results'>
          <p>Enter movie name to search movie.</p>
        </div>
      )}
    </>
  );
};

export default SearchResult;

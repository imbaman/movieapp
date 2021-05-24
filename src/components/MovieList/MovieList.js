import MovieRow from "../MovieRow/MovieRow";
import "./MovieList.css";
import { requests } from "../../api";
const MovieList = () => {
  return (
    <div className='movie-list'>
      <MovieRow genre={"Popular"} api={requests.trendingMovies} />
      <MovieRow genre={"Upcoming Movies"} api={requests.upcomingMovies} />
      <MovieRow genre={"Must see"} api={requests.topRatedMovies} />
    </div>
  );
};
export default MovieList;

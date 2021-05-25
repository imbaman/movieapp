import MovieRow from "../MovieRow/MovieRow";
import "./MovieList.css";
import { requests } from "../../api";
import Poster from "../Poster/Poster";
const MovieList = () => {
  return (
    <div className='movie-list'>
      <Poster />
      <MovieRow genre={"Popular"} api={requests.trendingMovies} />
      <MovieRow genre={"Upcoming Movies"} api={requests.upcomingMovies} />
      <MovieRow genre={"Must see"} api={requests.topRatedMovies} />
    </div>
  );
};
export default MovieList;

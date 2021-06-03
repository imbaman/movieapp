import { useEffect, useState } from "react";
import { instance } from "../../api";

const MovieDetails = ({ match }) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await instance.get(`/movie/${match.params.id}`);
      setMovie(response.data);
      console.log("saddas");
      return response;
    };
    fetchMovies();
  }, []);

  return <div>movie det {movie.title}</div>;
};

export default MovieDetails;

import axios from "axios";

const api_key = "ecb288a59b87618a38d51d22358c60a9";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: api_key },
});

const genres = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: "35",
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const requests = {
  searchMovies: `/search/movie`,
  upcomingMovies: "/movie/upcoming",
  trendingMovies: `/trending/movie/week`,
  popularMovies: `/movie/popular`,
  topRatedMovies: `/movie/top_rated`,
  comedyMovies: `discover/movie?with_genres=${genres.Comedy}`,
  actionMovies: `discover/movie?with_genres=${genres.Action}`,
  romanticMovies: `discover/movie?with_genres=${genres.Romance}`,
  crimeMovies: `discover/movie?with_genres=${genres.Crime}`,
  horrorMovies: `discover/movie?with_genres=${genres.Horror}`,
  documentaryMovies: `discover/movie?with_genres=${genres.Documentary}`,
};

export { requests, instance };

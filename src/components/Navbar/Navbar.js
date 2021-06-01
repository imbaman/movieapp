import "./Navbar.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./logo.png";
import { Link, useHistory, withRouter } from "react-router-dom";
import { requests, instance } from "../../api";

const Navbar = ({ search, setSearch }) => {
  const [movie, setMovie] = useState("");

  let history = useHistory();

  const getMovies = async (asd) => {
    console.log(asd);
    if (asd.length <= 1) {
      history.push("/");
      return;
    }

    const response = await instance
      .get(`${requests.searchMovies}?query=${asd}`)
      .catch((err) => {
        console.log(err);
      });

    setMovie(response.data.results);
    history.push({
      pathname: "/search",
      search: asd,
      movies: movie,
    });
    console.log(response.data.results);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    getMovies(search);
  };
  return (
    <nav>
      <div>
        <Link to='/' aria-label='logo icon'>
          <img src={logo} alt='' className='logo' />
        </Link>
      </div>
      <form className='search' onSubmit={handleOnSubmit}>
        <input
          type='text'
          placeholder='Search movies'
          onChange={handleChange}
          value={search}
        />
        <AiOutlineSearch className='search-icon' />
      </form>
    </nav>
  );
};
export default Navbar;

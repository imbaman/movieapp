import "./Navbar.css";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./logo.png";
import { Link, useHistory, withRouter } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  const [movie, setMovie] = useState("");

  let history = useHistory();

  const getMovies = () => {
    history.push({
      pathname: "/search",
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
    getMovies();
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

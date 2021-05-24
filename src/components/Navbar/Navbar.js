import "./Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt='' className='logo' />
      </div>
      <form className='search'>
        <input type='text' placeholder='Search movies' />
        <AiOutlineSearch className='search-icon' />
      </form>
    </nav>
  );
};
export default Navbar;

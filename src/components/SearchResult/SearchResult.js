import { useHistory, Link } from "react-router-dom";

const SearchResult = ({ search }) => {
  const history = useHistory();

  const img_api = "https://image.tmdb.org/t/p/w185";
  return (
    <div className='searched-box'>
      <div className='img-container'>
        <img src='' alt='' />
      </div>
      <div className='content'>
        <h1>{`Top result for: ${search}`}</h1>
        <h2>Title</h2>
        <small>genre year</small>
        <p>description</p>
      </div>
    </div>
  );
};

export default SearchResult;

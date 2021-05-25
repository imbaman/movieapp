import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Poster from "./Poster/Poster";
import "./App.css";
import MovieList from "./MovieList/MovieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResult from "./SearchResult/SearchResult";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar search={search} setSearch={setSearch} />
        <Switch>
          <Route path='/' exact render={(props) => <MovieList {...props} />} />
          <Route
            path='/search'
            render={(props) => <SearchResult {...props} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

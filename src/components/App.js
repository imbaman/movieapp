import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import MovieList from "./MovieList/MovieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResult from "./SearchResult/SearchResult";
import MovieDetails from "./MovieDetails/MovieDetails";
import Footer from "./Footer/Footer";

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
            render={(props) => <SearchResult {...props} search={search} />}
          />
          <Route path='/movie/:id' component={MovieDetails} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

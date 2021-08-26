import React, { useState, Suspense } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResult from "./SearchResult/SearchResult";
import MovieDetails from "./MovieDetails/MovieDetails";
import Footer from "./Footer/Footer";

const MovieList = React.lazy(() => import("./MovieList/MovieList"));

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <div className='container'>
        <Navbar search={search} setSearch={setSearch} />
        <Switch>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}>
                <h1>Loading...</h1>
              </div>
            }>
            <Route
              path='/'
              exact
              render={(props) => <MovieList {...props} />}
            />
          </Suspense>
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

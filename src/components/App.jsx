import {Routes, Route} from "react-router-dom";
import { lazy} from "react";
import {GlobalStyle} from "./GlobalStyle"

// import SharedLayout from "./SharedLayout";
// import Home from "pages/Home";
// import MovieSearchForm from "pages/MovieSearchForm";
// import MovieDetails from "pages/MovieDetails";
// import NotFound from "pages/NotFound";
// import Cast from "./Cast";
// import Reviews from "./Reviews";

const SharedLayout = lazy(() => import("./SharedLayout"));
const Home = lazy(() => import("pages/Home"));
const MovieSearchForm = lazy(() => import("pages/MovieSearchForm"))
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));
const NotFound = lazy(() => import("pages/NotFound"));

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      {/* <header>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">Movies</NavLink></li>
          </ul>
        </nav>
      </header> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home />} />
            {/* <Route path="/movies" element={<MovieSearchForm />}/> */}
            <Route path="movies" element={<MovieSearchForm />}/>
            {/* <Route path="/movies/:movieId" element={<MovieDetails />}> */}
            <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
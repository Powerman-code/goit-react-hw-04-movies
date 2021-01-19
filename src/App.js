import { Switch, Route } from 'react-router-dom';

import './App.css';
// import Navigation from './Navigation/Navigation';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
// import NotFoundView from './views/NotFoundView/NotFoundView';
import HomePage from './views/HomePage/HomePage';
// import MoviesPage from './views/MoviesPage/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';
// import Cast from './views/Cast/Cast';
// import Reviews from './views/Reviews/Reviews';

// ab146a7b8cb38ad119c57ebfe1b237c0

function App() {
  // const params = useParams();
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* <Route path="/movies" exact>
          <MoviesPage></MoviesPage>
        </Route> */}

        <Route path="/movies/:movieId">
          <MovieDetailsPage></MovieDetailsPage>
        </Route>

        {/* <Route path="movies/:movieId/cast">
          <Cast></Cast>
        </Route> */}

        {/* <Route path="movies/:movieId/reviews">
          <Reviews></Reviews>
        </Route> */}

        {/* <Route path="/">
          <NotFoundView></NotFoundView>
        </Route>

        <Route path="/">
          <FilmPendingView></FilmPendingView>
        </Route>

        <Route path="/">
          <FilmErrorView></FilmErrorView>
        </Route> */}
      </Switch>
    </Container>
    // <div className="App">
    //   <header className="App-header"></header>
    // </div>
  );
}

export default App;

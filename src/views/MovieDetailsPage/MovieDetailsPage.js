import { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../services/movies-api';

// import Cast from './views/Cast/Cast';
// import Reviews from './views/Reviews/Reviews';

export default function MoviesDetailsPage() {
  // const params = useParams();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);
  // тут можно использовать Idle, pending...

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);

  return (
    <>
      {movie && (
        <>
          {/* <img src={movie.imgUrl} alt={movie.title} /> */}
          <h1>тут будет карточка фильма</h1>
        </>
      )}

      {/* <Route path={}>
        <Cast />
        <Reviews />
      </Route> */}
    </>
  );
}

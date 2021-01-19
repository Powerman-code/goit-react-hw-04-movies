import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    api.fetchMovies().then(setMovies);
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/${movies.id}`}>{movie.title}</Link>тут будет
              карточка фильма/список фильмов
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

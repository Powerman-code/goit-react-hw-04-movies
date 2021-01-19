import { Link, useRouteMatch } from 'react-router-dom';

export default function FilmGalleryView({ movies }) {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.name}</Link>
          <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}

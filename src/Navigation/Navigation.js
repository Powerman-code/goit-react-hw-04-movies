import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Главная
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Фильмы
      </NavLink>
      {/* <NavLink
        exact
        to="/movies/:movieId"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Информация
      </NavLink>
      <NavLink
        to="/movies/:movieId/cast"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Актерский состав
      </NavLink>
      <NavLink
        to="/movies/:movieId/reviews"
        className={s.link}
        activeClassName={s.activeLink}
      >
        Обзоры
      </NavLink> */}
    </nav>
  );
};

export default Navigation;

import { useState, useEffect } from 'react';
// import Navigation from '../Navigation/Navigation';
import styles from './HomePage.module.css';
import Navigation from '../../Navigation/Navigation';
import FilmGalleryView from '../FilmGalleryView/FilmGalleryView';
import { fetchTrendingMovies } from '../../services/movies-api';

const Status = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    // if (movies === []) {
    //   return;
    // }
    setStatus(Status.PENDING);
    fetchTrendingMovies()
      .then(({ results }) => {
        if (results) {
          setStatus(Status.RESOLVED);
          setMovies(results);

          console.log(movies);
          console.log(status);
        } else {
          return Promise.reject(new Error('Sorry, no Trend movies available'));
        }
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, []);

  console.log(movies);
  console.log(status);

  if (status === Status.PENDING) {
    // return <ImagePendingView />;
    // console.log('Сработал PENDING');
  }

  if (status === Status.REJECTED) {
    // return <ImageErrorView message={error.message} />;
    // console.log('Сработал Rejected');
  }

  if (status === Status.RESOLVED) {
    // console.log('Сработал Resolved');
    // return (
    //   <>
    //     <header className={styles.header}>Trending Today</header>
    //     {movies && (
    //       <FilmGalleryView className={styles.gallery} movies={movies} />
    //     )}
    //   </>
    // );
  }

  return (
    <>
      <header className={styles.header}>Trending Today</header>
      {movies && <FilmGalleryView className={styles.gallery} movies={movies} />}
    </>
  );
}

// import { useState, useEffect } from 'react';
// import api from '../Image-api/images-api';
// import PropTypes from 'prop-types';
// import ImageErrorView from '../ImageErrorView/ImageErrorView';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import ImagePendingView from '../ImagePendingView/ImagePendingView';
// import Button from '../Button/Button';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   REJECTED: 'rejected',
//   RESOLVED: 'resolved',
// };

// export default function ImageInfo({ searchQuerry }) {
//   const [images, setImages] = useState([]);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [status, setStatus] = useState(Status.IDLE);

//   console.log(searchQuerry);

//   useEffect(() => {
//     setImages([]);
//   }, [searchQuerry]);

//   useEffect(() => {
//     if (!searchQuerry) {
//       return;
//     }
//     setStatus(Status.PENDING);

//     api
//       .fetchImage(searchQuerry, page)
//       .then(({ hits }) => {
//         if (hits.length !== 0) {
//           setImages(prevState => [...prevState, ...hits]);
//           setStatus(Status.RESOLVED);
//         } else {
//           return Promise.reject(
//             new Error('Sorry, the requested information was not found'),
//           );
//         }
//       })
//       .catch(error => {
//         setError(error);
//         setStatus(Status.REJECTED);
//       });
//   }, [page, searchQuerry]);

//   const onLoadMore = () => {
//     setPage(prevState => prevState + 1);
//   };

//   if (status === Status.IDLE) {
//     return <h1>Please enter your request</h1>;
//   }

//   if (status === Status.PENDING) {
//     return <ImagePendingView />;
//   }

//   if (status === Status.REJECTED) {
//     return <ImageErrorView message={error.message} />;
//   }

//   if (status === Status.RESOLVED) {
//     return (
//       <>
//         <ImageGallery images={images} />
//         {images && <Button onClick={onLoadMore} page={page} />}
//       </>
//     );
//   }
// }

// ImageInfo.propTypes = {
//   searchQuerry: PropTypes.string.isRequired,
// };

import AddToFavorites from "../AddToFavorites/AddToFavorites";
import styles from "./Movie.module.css";
const Movie = ({ movie }) => {
  return (
    <div className={styles.container}>
      <AddToFavorites movie={movie} />

      <img
        className={styles.img}
        width={200}
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        alt="img"
      />
    </div>
  );
};

export default Movie;

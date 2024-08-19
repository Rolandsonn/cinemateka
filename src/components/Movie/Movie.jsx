import styles from "./Movie.module.css";
const Movie = ({ movie }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={`https://image.tmdb.org/t/p/w500${
          movie.poster_path || movie.backdrop_path
        }`}
        alt="img"
      />
    </div>
  );
};

export default Movie;

import styles from "./Films.module.css";
import { Link } from "react-router-dom";
const FilmsItem = ({
  backdrop_path,
  title,
  name,
  id,
  original_title,
  poster_path,
  popularity,
  vote_average,
  release_date,
  first_air_date,
}) => {
  return (
    <li className={styles.item}>
      <Link to={`/${id}`}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
          alt="img"
        />
        <p className={styles.title}>{original_title || title || name}</p>

        <div className={styles.hiddenInfo}>
          <b className={styles.vote}>{vote_average}</b>

          <p className={styles.date}>{release_date || first_air_date}</p>
        </div>
      </Link>
    </li>
  );
};

export default FilmsItem;

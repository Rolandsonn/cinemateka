import styles from "./Films.module.css";
import { Link } from "react-router-dom";
import { MdOutlineImageNotSupported } from "react-icons/md";

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
  const imageUrl =
    poster_path || backdrop_path
      ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
      : null;

  return (
    <li className={styles.item}>
      <Link to={`/movie/${id}`}>
        {imageUrl ? (
          <img className={styles.img} src={imageUrl} alt="Movie Poster" />
        ) : (
          <div className={styles.noImage}>
            <MdOutlineImageNotSupported size={50} />
            <p>No Image Available</p>
          </div>
        )}
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

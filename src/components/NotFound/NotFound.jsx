import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundText}>404</div>
      <div className={styles.notFoundMessage}>Page Not Found</div>
    </div>
  );
};

export default NotFound;

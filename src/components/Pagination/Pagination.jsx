import styles from "./Pagination.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ page, handleChangePage, totalPages }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => handleChangePage("minus")} className={styles.btn}>
        <FaAngleDoubleLeft />
      </button>
      <span>
        {page}/ {totalPages}
      </span>
      <button onClick={() => handleChangePage("plus")} className={styles.btn}>
        <FaAngleDoubleRight />
      </button>
    </div>
  );
};

export default Pagination;

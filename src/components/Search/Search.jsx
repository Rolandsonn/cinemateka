import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Search.module.css";

const Search = ({ handleClick }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <input
          className={styles.search}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.icon}>
          <CiSearch />
        </button>
      </label>
    </form>
  );
};

export default Search;

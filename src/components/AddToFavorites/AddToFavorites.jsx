import { useDispatch } from "react-redux";
import styles from "./AddToFavorites.module.css";
import { addFavorites } from "../../store/slices/favoriteSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddToFavorites = ({ movie }) => {
  const isAuth = useSelector((state) => state.user.token);
  // const [check, setCheck] = useState(false);
  const films = useSelector((state) => state.favorites.films);
  const check = films.find((film) => film.id === movie.id);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isAuth) {
      dispatch(
        addFavorites({
          movie,
        })
      );
      setCheck(true);
    } else {
      alert("Войдите в свой аккаунт");
    }
  };

  return (
    <button title="Add to favorites" onClick={handleClick}>
      {check ? "Added" : "Add to favorites"}
    </button>
  );
};

export default AddToFavorites;

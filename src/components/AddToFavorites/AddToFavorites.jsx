import { useDispatch } from "react-redux";
import styles from "./AddToFavorites.module.css";
import { addFavorites } from "../../store/slices/favoriteSlice";
const AddToFavorites = ({ movie }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addFavorites({
        movie,
      })
    );
  };

  return (
    <button title="Add to favorites" onClick={handleClick}>
      Add to favorites
    </button>
  );
};

export default AddToFavorites;

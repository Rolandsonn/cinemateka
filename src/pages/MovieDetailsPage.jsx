import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie/Movie";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const { movieId } = useParams();

  useEffect(() => {
    const type = `movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    fetchFilms(type).then(({ data }) => setMovie(data));
  }, []);

  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;

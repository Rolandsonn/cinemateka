import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie/Movie";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms("movie", movieId).then(({ data }) => setMovie(data));
  }, []);

  return (
    <div>
      <Movie movie={movie} />
    </div>
  );
};

export default MovieDetailsPage;

import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import FilmsList from "../components/films/FilmsList";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  useEffect(() => {
    const type = `trending/all/day?api_key=${API_KEY}&language=en-US`;

    fetchFilms(type).then(({ data }) => {
      setFilms(data.results);
    });
  }, []);

  return (
    <section>
      <FilmsList films={films} />
    </section>
  );
};

export default HomePage;

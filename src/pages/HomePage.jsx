import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import FilmsList from "../components/films/FilmsList";

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms().then(({ data }) => {
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

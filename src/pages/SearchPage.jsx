import { useEffect, useState } from "react";
import FilmsList from "../components/films/FilmsList";
import Search from "../components/Search/Search";
import { fetchFilms } from "../api/fetchFilms";
import Loader from "../components/Loader";
const SearchPage = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const type = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
    fetchFilms(type).then(({ data }) => setFilms(data.results));
  }, []);

  useEffect(() => {
    const type = `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`;
    if (query) {
      setIsLoading(true);
      fetchFilms(type).then(({ data }) => setFilms(data.results));
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [query]);

  const handleClick = (data) => {
    setQuery(data);
  };

  return (
    <section>
      <div className="container">
        <Search handleClick={handleClick} />

        <h2>Возможно, тебя заинтересует</h2>

        {!isLoading ? <FilmsList films={films} /> : <Loader />}
      </div>
    </section>
  );
};

export default SearchPage;

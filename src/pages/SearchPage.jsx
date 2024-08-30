import { useEffect, useState } from "react";
import FilmsList from "../components/films/FilmsList";
import Search from "../components/Search/Search";
import { fetchFilms } from "../api/fetchFilms";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination/Pagination";
const SearchPage = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const type = `movie/top_rated?api_key=${API_KEY}&language=en-US`;
    fetchFilms(type).then(({ data }) => setFilms(data.results));
  }, []);

  useEffect(() => {
    const type = `search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}&page=${page}`;
    if (query) {
      setIsLoading(true);
      fetchFilms(type).then(({ data }) => {
        setTotalPages(data.total_pages);
        setFilms(data.results);
      });
      setTimeout(() => setIsLoading(false), 1000);
    }
  }, [query, page]);

  const handleClick = (data) => {
    setQuery(data);
  };

  const handleChangePage = (type) => {
    if (type === "plus" && totalPages > page) {
      setPage(page + 1);
    } else if (type === "minus" && page >= 2) {
      setPage(page - 1);
    }
  };

  return (
    <section>
      <div className="container">
        <Search handleClick={handleClick} />

        <h2>Возможно, тебя заинтересует</h2>

        {!isLoading ? <FilmsList films={films} /> : <Loader />}

        <Pagination
          totalPages={totalPages}
          handleChangePage={handleChangePage}
          page={page}
        />
      </div>
    </section>
  );
};

export default SearchPage;

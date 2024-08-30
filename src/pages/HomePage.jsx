import { useState, useEffect } from "react";
import { fetchFilms } from "../api/fetchFilms";
import FilmsList from "../components/films/FilmsList";
import Pagination from "../components/Pagination/Pagination";
import Loader from "../components/Loader";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  useEffect(() => {
    const type = `trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
    setIsLoading(true);

    fetchFilms(type).then(({ data }) => {
      setTotalPages(data.total_pages);
      setFilms(data.results);
    });
    setTimeout(() => setIsLoading(false), 700);
  }, [page]);

  const handleChangePage = (type) => {
    if (type === "plus" && totalPages > page) {
      setPage(page + 1);
    } else if (type === "minus" && page >= 2) {
      setPage(page - 1);
    }
  };

  return (
    <section>
      {!isLoading ? <FilmsList films={films} /> : <Loader />}
      <Pagination
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        page={page}
      />
    </section>
  );
};

export default HomePage;

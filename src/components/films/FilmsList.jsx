import FilmsItem from "./FilmsItem";

const FilmsList = ({ films }) => {
  const filmsElem =
    films.length > 0 && films.map((film) => <FilmsItem key={film.id} />);

  return <ul>{filmsElem}</ul>;
};

export default FilmsList;

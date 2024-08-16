import axios from "axios";

export const fetchFilms = async () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const API = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`;

  try {
    const data = await axios.get(API);

    return data;
  } catch (error) {
    console.error(`Error fetching trending films: ${error.message}`);
  }
};

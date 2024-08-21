import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites(state, action) {
      const isExists = state.films.find(
        (item) => item.id === action.payload.movie.id
      );

      if (!isExists) {
        state.films.push(action.payload.movie);
      } else {
        alert("The movie has already been added to your favorites list");
      }
    },
    removeFavorites(state) {},
  },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

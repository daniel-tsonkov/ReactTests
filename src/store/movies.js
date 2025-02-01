import { createSlice } from "@reduxjs/toolkit";


export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        list: [
            { id: 1, title: "movie1" },
            { id: 2, title: "movie2" }
        ]
    },
    reducers: {
        addMovie: (state) => {
            const newMovie = {
                id: 3,
                title: "movie 3"
            };
            state.list = [...state.list, newMovie]
        }
    }
});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
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

    }
});

export default moviesSlice.reducer;
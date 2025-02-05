import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: true,
        articles: {
            items: []
        }
    },
    reducers: {},
    extraReducers: {}
});

export default postsSlice.reducer;
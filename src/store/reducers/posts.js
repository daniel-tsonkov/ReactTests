import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../utils/thunks";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: true,
        articles: {
            items: []
        }
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => { })
            .addCase(fetchPosts.fulfilled, (state, action) => {

            })
            .addCase(fetchPosts.rejected, (state) => { })
    }
});

export default postsSlice.reducer;
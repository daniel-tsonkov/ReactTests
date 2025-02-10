import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: true,
        articles: {
            items: []
        },
    },
    reducers: {
        clearPostById: (state) => {
            state.postById = {};
        }
    },

});

export const { clearPostById } = postsSlice.actions;
export default postsSlice.reducer;
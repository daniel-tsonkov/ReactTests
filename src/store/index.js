import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./reducers/posts";

export const store = configureStore({
    reducer: {
        posts: PostReducer
    }
});
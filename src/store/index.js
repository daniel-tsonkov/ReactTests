import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./reducers/posts";
import { usersReducer } from "./reducers/users";

export const store = configureStore({
    reducer: {
        posts: PostReducer,
        users: usersReducer
    }
});
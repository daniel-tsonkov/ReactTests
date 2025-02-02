import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        user: []
    },
    reducers: {

    }
})

export default usersSlice.reducer;
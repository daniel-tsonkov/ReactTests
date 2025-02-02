import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        user: []
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || 'Guest'
        },
        getUsers: (state) => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((Response) => {
                    console.log(Response.data);

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
})

export const { setType, getUsers } = usersSlice.actions;
export default usersSlice.reducer;
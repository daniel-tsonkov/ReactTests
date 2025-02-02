import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (thunkAPI) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data);
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        type: 'Guest',
        users: []
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || 'Guest'
        },
        getUsers: (state) => {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    console.log(response.data);
                    state.users = response.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    extraReducers: (builder) => {
        builder.addCase()
    }
})

export const { setType, getUsers } = usersSlice.actions;
export default usersSlice.reducer;
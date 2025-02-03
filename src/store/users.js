import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (thunkAPI) => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data;
        } catch (err) {
            return err;
        }
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
        // getUsers: (state) => {
        //     axios.get('https://jsonplaceholder.typicode.com/users')
        //         .then((response) => {
        //             console.log(response.data);
        //             state.users = response.data;
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         })
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                console.log('pending');

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log('fulfilled');
                //console.log(action.payload);
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                console.log('rejected');

            })
    }
})

export const { setType } = usersSlice.actions;
export default usersSlice.reducer;
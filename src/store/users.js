import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    'users/fetchUser',
    async (thunkAPI) => {
        console.log(thunkAPI);
        thunkAPI.dispatch(testAsyncDispatch());

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
        users: [],
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload || 'Guest'
        },
        testAsyncDispatch: (state) => {
            state.test = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                console.log('pending');

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                console.log('fulfilled');
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                console.log('rejected');

            })
    }
})

export const { setType, testAsyncDispatch } = usersSlice.actions;
export default usersSlice.reducer;
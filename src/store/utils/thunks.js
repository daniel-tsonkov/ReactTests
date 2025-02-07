import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL_SERV = "http://localhost:3001"


export const fetchPost = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        try {

        } catch (err) {
            throw err
        }
    }
)
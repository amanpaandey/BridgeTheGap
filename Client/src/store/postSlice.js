import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    
    posts:null,
    isLoading:false,
    isError:false,
}


export const getPosts = createAsyncThunk("getPosts",async() =>{
    const response = await axios.get("api/v1/post/get-all-posts");
    return response.data;
});

const postSlice = createSlice({
    name:"posts",
    initialState,
    extraReducers:(builder) =>{

        builder.addCase(getPosts.pending,(state) => {
            state.isLoading = true;
        })
              
        builder.addCase(getPosts.fulfilled,(state,action) => {
            state.isLoading = false;
            state.isError = false;
            state.posts = action.payload;
        })

        builder.addCase(getPosts.rejected,(state,action) => {
            state.isLoading = false;
            state.isError = true;
            state.posts = action.payload;
        })
    }
})

export default postSlice.reducer
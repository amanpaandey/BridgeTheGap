import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    posts:[],
    isLoading:false,
    isError:false,
}




const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPosts:(state,action) => {
           
              state.posts = action.payload;
              state.isLoading = false;
              state.isError = false;
             
    }
}

})

export const {addPosts} = postSlice.actions;

export default postSlice.reducer
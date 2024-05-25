import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status:false,
    userData:null,
    isLoading:false,
    isError:false,

}

export const login = createAsyncThunk("login",async({username,password}) =>{



    /* const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); */
    /* myHeaders.append("Cookie", "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE2MzAxMzc5fQ.8hJMmr4oT16PCO2rd61i1i8Dl1JfwiXCs6yp6KrX-Jk; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE3MDc4OTc5fQ.YmrGic-bDSWMFVFj6sj7A9pYfM9u72fLjRkgcGTK0vE"); */
    
    const raw = {
      "username": username,
      "password": password
    };
    
   /*  const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }; */




    const response = await axios.post("api/v1/users/login",raw,{
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
    
    console.log(response);
    
    return response?.data;
})

export const logout  = createAsyncThunk("logout",async()=>{
const response = await axios.post("api/v1/users/logout",{
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})



return response?.data;
})

const authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:(builder) =>{

        builder.addCase(login.pending,(state) => {
            state.isLoading = true;
        })
              
        builder.addCase(login.fulfilled,(state,action) => {
            state.status = true;
            state.userData = action.payload;
        })
        builder.addCase(login.rejected,(state) => {
            state.isError = true;
        })
        builder.addCase(logout.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(logout.fulfilled,(state) => {
            state.status = false;
            state.userData = null;
        })
        builder.addCase(logout.rejected,(state) => {
            state.isError = true;
        })
    },
    


})



export default authSlice.reducer;
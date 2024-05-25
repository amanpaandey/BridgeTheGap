import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    status:false,
    ngoData:null,
    isLoading:false,
    isError:false,

}

export const Ngologin = createAsyncThunk("Ngologin",async({username,password}) =>{



    /* const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); */
    /* myHeaders.append("Cookie", "accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE2MzAxMzc5fQ.8hJMmr4oT16PCO2rd61i1i8Dl1JfwiXCs6yp6KrX-Jk; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmU3ZTMwZmM2ZTQxNTkxNGFjNTRkYiIsImlhdCI6MTcxNjIxNDk3OSwiZXhwIjoxNzE3MDc4OTc5fQ.YmrGic-bDSWMFVFj6sj7A9pYfM9u72fLjRkgcGTK0vE"); */
    
    const raw = {
      "ngoName": username,
      "password": password
    };
    
   /*  const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }; */




    const response = await axios.post("api/v1/ngo/login",raw,{
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    })
    
    console.log(response);
    
    return response?.data;
})

export const Ngologout  = createAsyncThunk("Ngologout",async()=>{
const response = await axios.post("api/v1/ngo/logout",{
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})



return response?.data;
})

const ngoAuthSlice = createSlice({
    name:"ngoAuth",
    initialState,
    extraReducers:(builder) =>{

        builder.addCase(Ngologin.pending,(state) => {
            state.isLoading = true;
        })
              
        builder.addCase(Ngologin.fulfilled,(state,action) => {
            state.status = true;
            state.ngoData = action.payload;
        })
        builder.addCase(Ngologin.rejected,(state) => {
            state.isError = true;
        })
        builder.addCase(Ngologout.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(Ngologout.fulfilled,(state) => {
            state.status = false;
            state.ngoData = null;
        })
        builder.addCase(Ngologout.rejected,(state) => {
            state.isError = true;
        })
    },
    



})



export default ngoAuthSlice.reducer;
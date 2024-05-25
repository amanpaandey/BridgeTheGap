import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";
import NgoAuthSlice from "./NgoAuthSlice";




const store  = configureStore({
    reducer:{
        auth : authSlice,
        posts:postSlice,
        ngoAuth:NgoAuthSlice
       
    }
})





export default store;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';

const rootReducer = {
    user : userReducer,
}


export const store = configureStore({
    reducer:rootReducer
})
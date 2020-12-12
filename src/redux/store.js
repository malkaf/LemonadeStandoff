import { configureStore } from "@reduxjs/toolkit";
import gameManagerReducer from "./gameStore"

const store = configureStore({
    reducer: gameManagerReducer,
});

export default store

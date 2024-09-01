import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/slice";

const preloadedState = {
    basket: {
        items: JSON.parse(localStorage.getItem("basketItems")) || [],
    },
};

const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
    preloadedState,
});

export default store;

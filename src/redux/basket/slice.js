import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("basketItems")) || [],
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...item, quantity: 1 });
            }
            localStorage.setItem("basketItems", JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem("basketItems", JSON.stringify(state.items));
        },
        clearBasket: (state) => {
            state.items = [];
            localStorage.removeItem("basketItems");
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem && quantity > 0) {
                existingItem.quantity = quantity;
            }
            localStorage.setItem("basketItems", JSON.stringify(state.items));
        },
    },
});

export const { addItem, removeItem, clearBasket, updateQuantity } = basketSlice.actions;
export default basketSlice.reducer;

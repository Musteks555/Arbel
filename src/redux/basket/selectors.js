export const selectBasketItems = (state) => state.basket.items;

export const selectTotalQuantity = (state) => state.basket.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) => state.basket.items.reduce((total, item) => total + item.price * item.quantity, 0);

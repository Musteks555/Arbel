import { addItem, removeItem, clearBasket, updateQuantity } from "./slice";

export const addToBasket = (item) => (dispatch) => {
    dispatch(addItem(item));
};

export const removeFromBasket = (itemId) => (dispatch) => {
    dispatch(removeItem(itemId));
};

export const clearBasketItems = () => (dispatch) => {
    dispatch(clearBasket());
};

export const updateItemQuantity = (id, quantity) => (dispatch) => {
    dispatch(updateQuantity({ id, quantity }));
};

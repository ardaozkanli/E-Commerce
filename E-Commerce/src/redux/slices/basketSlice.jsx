import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

const initialState = {
  products: getBasketFromStorage(),
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);

      if (!findProduct) {
        state.products = [...(state.products || []), action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
  },
});

export const { addProductToBasket } = basketSlice.actions;
export default basketSlice.reducer;

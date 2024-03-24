import { configureStore, createSlice } from "@reduxjs/toolkit";
const StoreSlice = createSlice({
  name: "HireIn5",
  initialState: {
    isPopUp: "",
  },
  reducers: {
    isPopUpHander(state, action) {
      state.isPopUp = action.payload;
    },
  },
});
export const storeAction = StoreSlice.actions;
const Store = configureStore(StoreSlice);
export default Store;

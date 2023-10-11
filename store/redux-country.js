import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryList: null,
};

const countrySlice = createSlice({
  name: "countryReduxName",
  initialState,
  reducers: {
    refreshCountryList(state, action) {
      state.countryList = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { countryStore: countrySlice.reducer },
});

export const countryActions = countrySlice.actions;

export default store;

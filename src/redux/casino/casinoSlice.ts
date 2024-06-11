import { createSlice } from "@reduxjs/toolkit";
import initialCasinoData from "../../utils/initialCasinoData";
import { Casino } from "@/utils/interface";

interface CasinoState {
  casino: Casino[];
  search: string;
}
const initialState: CasinoState = {
  casino: initialCasinoData,
  search: "",
};
const casinoSlice = createSlice({
  name: "casino",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = casinoSlice.actions;

export default casinoSlice.reducer;

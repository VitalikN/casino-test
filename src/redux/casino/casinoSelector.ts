import { RootState } from "../store";

const getCasino = (state: RootState) => state.casino.casino;
const getSearch = (state: RootState) => state.casino.search;

const casinoSelector = {
  getCasino,
  getSearch,
};

export default casinoSelector;

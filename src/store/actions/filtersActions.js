import { SET_FILTER } from "../constants/filtersConst.js";

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})
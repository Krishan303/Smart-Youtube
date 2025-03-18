import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isWatchPage: false,
        searchValue: ""
    },
    reducers: {
        toggleMenu : (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isWatchPage = true;
        },
        addValue : (state,action) => {
            state.searchValue = action.payload;
        }
    }
})

export const {toggleMenu, closeMenu, addValue} = appSlice.actions;
export default appSlice.reducer;
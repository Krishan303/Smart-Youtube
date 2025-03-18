import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState:{},
    reducers: {
        chacheResult: (state,action) => {
            return {...state , ...action.payload}
        }
    }
})


export const {chacheResult} = searchSlice.actions;
export default searchSlice.reducer;
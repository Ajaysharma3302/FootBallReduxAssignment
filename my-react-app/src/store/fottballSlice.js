
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isError: false,
    footballMatches: [],
}

const footballSlice = createSlice({
    name:"football",
    initialState,
    reducers:{
        fetchMatchesStart(state){
            state.isLoading =true
            state.isError = false
        },
        fetchMatchesSuccess(state, action) {
            state.isLoading = false;
            state.footballMatches = action.payload;
          },
          fetchMatchesError(state) {
            state.isLoading = false;
            state.isError = true;
          },

    }
})

export const { fetchMatchesStart, fetchMatchesSuccess, fetchMatchesError } = footballSlice.actions;
export default footballSlice.reducer;

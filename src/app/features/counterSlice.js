import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}


export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
           state.value++
        },
        decrement(state){
            state.value--
        },
        reset(state){
            state.value = 0
        },
        plusByNumber(state,action){
            state.value += +action.payload
        },
    },
})

export const {increment,decrement,reset,plusByNumber, addTwoByTwoSecond} = counterSlice.actions
export default counterSlice.reducer
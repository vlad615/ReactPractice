import { createAction, createReducer, } from "@reduxjs/toolkit"

type Counter = number
const initialState: Counter = 0

export const addToAC = createAction<{ num: Counter }>('counter/addTo')
export const resetCounterAC = createAction('counter/resetCounter')


export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addToAC, (state, action) => {
            if (state + action.payload.num <= 15) {
                state += action.payload.num
            }
        })
        .addCase(resetCounterAC, (state)=>{
            state = 0
        })
})
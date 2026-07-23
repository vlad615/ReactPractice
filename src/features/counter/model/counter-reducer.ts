import { createAction, createReducer } from '@reduxjs/toolkit'

export type Counter = number
const initialState: Counter = 0

export const addToAC = createAction<{ num: Counter }>('counter/addTo')
export const resetCounterAC = createAction('counter/resetCounter')

export const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(addToAC, (state, action) => (state += action.payload.num)).addCase(resetCounterAC, () => 0)
})

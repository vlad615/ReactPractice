import { counterReducer } from '@/features/counter/model/counter-reducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

;(window as any).store = store

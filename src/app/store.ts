import { counterReducer } from '@/features/counter/model/counter-reducer'
import { loadingReducer } from '@/features/s2/ui/main/pages/junior-plus/hw10/bll/loadingReducer'
import { themeReducer } from '@/features/s2/ui/main/pages/junior-plus/hw12/bll/themeReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
    counter: counterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

;(window as any).store = store

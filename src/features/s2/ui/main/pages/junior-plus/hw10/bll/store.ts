import { combineReducers, legacy_createStore } from '@reduxjs/toolkit'
// import { themeReducer } from '../../hw12/bll/themeReducer'

const reducers = combineReducers({
    // theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных

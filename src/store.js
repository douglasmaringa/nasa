import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import apiReducer from "./slices/apiCalls"


const reducer = combineReducers({
    data:apiReducer
})

const store = configureStore({
  reducer,    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export default store;
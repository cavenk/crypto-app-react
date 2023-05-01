import {configureStore} from "@reduxjs/toolkit"
import { carouselReducer } from "./CarouselSlice"
import { homeReducer } from "./HomeSlice"

export const store = configureStore({
    reducer : {
        carouselSlice : carouselReducer,
        homeSlice : homeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
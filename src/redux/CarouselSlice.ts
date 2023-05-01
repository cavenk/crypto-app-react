import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../enums/Status";
import { ICarouselItem } from "../interfaces/ICarouselItem";

const slice = createSlice({
    name : "carouselSlice",

    initialState : {
        status : Status.READY,
        coinsList : []
    },

    reducers : {
        updateStatus(state, action){
            state.status = action.payload
        },

        updateList(state, action){
            state.status = Status.READY
            state.coinsList = action.payload
        }

    }
})

export const carouselReducer = slice.reducer
export const carouselAction = slice.actions
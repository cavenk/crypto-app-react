import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Status } from "../enums/Status"
import {ICoinsItem} from "../interfaces/ICoinsItem"

interface HomeSliceState {
    status : Status
    coins : ICoinsItem[],
    pageLimit : number,
    currentPage : number,
    filteredCoin : ICoinsItem[] | null
}

const initialState : HomeSliceState = {
    status : Status.READY,
    coins : [],
    pageLimit : 10,
    currentPage : 1,
    filteredCoin : null
}

const slice = createSlice({
    name : "homeSlice",

    initialState,

    reducers : {
        updateStatus(state, action : PayloadAction<Status>){
            state.status = action.payload
        },

        updateList(state, action : PayloadAction<ICoinsItem[]>){
            state.status = Status.READY
            state.coins = action.payload
        },

        setCurrentPage(state, action : PayloadAction<number>){
            state.currentPage = action.payload
        },

        filterCoin(state, action : PayloadAction<string>){
            const input = action.payload

            if(input === ""){
                state.filteredCoin = null
    
            } else{
                state.filteredCoin = state.coins.filter((value : ICoinsItem) => 
                    value.name.toLowerCase().startsWith(input.toLowerCase())
                )
            }
        }

    }
})

export const homeReducer = slice.reducer
export const homeAction = slice.actions
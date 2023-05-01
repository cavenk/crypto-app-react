import {useDispatch} from "react-redux"
import { AppDispatch } from "../redux/store"
import { carouselAction } from "../redux/CarouselSlice"
import { Status } from "../enums/Status"
import * as CoinApi from "../Api"
import { ICarouselItem } from "../interfaces/ICarouselItem"
import { homeAction } from "../redux/HomeSlice"
import { ICoinsItem } from "../interfaces/ICoinsItem"

export function useCoinApi(){
    const dispatch : AppDispatch = useDispatch()

    async function getTrendingCoins(){ 
        dispatch(carouselAction.updateStatus(Status.LOADING))

        const url = CoinApi.trendingUrl()
        const response = await fetch(url)
        const data = await response.json()
        
        const list : ICarouselItem[] = data.map((e : any) => ({
            id : e.id,
            symbol : e.symbol,
            name : e.name, 
            image : e.image,
            currentPrice : e.current_price,
            priceChange : e.price_change_percentage_24h

        }))

        dispatch(carouselAction.updateList(list))
    }

    async function getAllCoins(){
        try{
            dispatch(homeAction.updateStatus(Status.LOADING))
            
            const url : string = CoinApi.allCoins(1)
            const response = await fetch(url)
            const data = await response.json()
            
            const list : ICoinsItem[] = data.map((e : any) => ({
                id : e.id,
                symbol : e.symbol,
                name : e.name, 
                image : e.image,
                currentPrice : e.current_price,
                priceChange : e.price_change_percentage_24h,
                marketCap : e.market_cap
            }))
            
            dispatch(homeAction.updateList(list))

        } catch(e){
            dispatch(homeAction.updateStatus(Status.READY))
        }
    }

    return {
        getTrendingCoins, 
        getAllCoins
    }
}
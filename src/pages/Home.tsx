import { useEffect, useState, ChangeEvent } from "react"
import { useCoinApi } from "../hooks/useCoinApi"
import { Carousel } from "./Home/Carousel"
import { CoinsItem } from "./Home/CoinsItem"
import {useSelector} from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { ICoinsItem } from "../interfaces/ICoinsItem"
import { Spinner } from "../components/Spinner"
import { Status } from "../enums/Status"
import { Pagination } from "./Home/Pagination"
import {useDispatch} from "react-redux"
import { homeAction } from "../redux/HomeSlice"

export function Home(){

    const dispatch : AppDispatch = useDispatch()
    const {getAllCoins} = useCoinApi()
    const {
        status, 
        coins,
        currentPage,
        filteredCoin,
        pageLimit
    } = useSelector((state : RootState) => state.homeSlice)

    const tableHeaderCell = (name : string) =>
        <div className="col"><b>{name}</b></div> 

    const onInputChange = (e : ChangeEvent<HTMLInputElement>) =>
        dispatch(homeAction.filterCoin(e.target.value)) 

    const showData = () => {
        if(status === Status.LOADING)
            return <Spinner />

        if(status === Status.READY && coins.length === 0)
            return <div className="text-white text-center">Nothing to show</div>

        if(filteredCoin)
            return filteredCoin
                .map((value : ICoinsItem) => <CoinsItem key={value.id} item={value}/>)

        
        return coins
            .slice(pageLimit * currentPage - pageLimit, pageLimit * currentPage)
            .map((value : ICoinsItem) => <CoinsItem key={value.id} item={value}/>)
    }

    useEffect(() => {
        getAllCoins()
    }, [])

    return (
        <main>
            {/* Carousel */}
            <section className="p-5 bg-black">
                <Carousel/>
            </section>

            {/* Search bar */}
            <section className="px-2 my-4 container">
                <div className="col-12 col-md-8 col-lg-6 m-auto">
                    <input 
                        className="form-control bg-transparent text-white" 
                        placeholder="Search a crypto currency..." 
                        onChange={onInputChange}
                    />
                </div>
            </section>

            {/* Table */}
            <section className="my-4 px-2 container">
                <div className="bg-warning p-2 rounded-top d-flex gap-2">
                    {tableHeaderCell("Coin")}
                    {tableHeaderCell("Price")}
                    {tableHeaderCell("24h change")}
                    {tableHeaderCell("Market cap")}
                </div>
                {showData()}
            </section>

           {!filteredCoin && <Pagination />}
        </main>
    )
}
import {useSelector, useDispatch} from "react-redux"
import { RootState } from "../../redux/store"
import { homeAction } from "../../redux/HomeSlice"

export function Pagination(){

    const {
        currentPage,
        pageLimit,
        coins
    } = useSelector((state : RootState) => state.homeSlice)
    const dispatch = useDispatch()

    const totalPage = coins.length / pageLimit


    const showData = () =>{
        const pages : JSX.Element[] = []

        for (let i = 1; i <= totalPage; i++){
            let style = "btn btn-pagination"

            if(i === currentPage)
                style += " selected"

            pages.push(
                <button 
                    key={i} 
                    className={style} 
                    onClick={() => dispatch(homeAction.setCurrentPage(i))}
                >{i}</button>
            )
        }

        return pages
    }

    return (
        <div className="d-flex justify-content-center gap-2">
           {showData()}
        </div>
    )
}
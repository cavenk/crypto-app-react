import MultiCarousel, {ResponsiveType} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { CarouselItem } from "./CarouselItem";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux/es/exports";
import { useEffect } from "react";
import { ICarouselItem } from "../../interfaces/ICarouselItem";
import { useCoinApi } from "../../hooks/useCoinApi";

export function Carousel(){

    const responsive : ResponsiveType = {
        cell : {
            breakpoint : {min : 0, max : 575},
            items : 2
        },

        tablet : {
            breakpoint : {min : 576, max : 767},
            items : 3
        },

        desktop : {
            breakpoint : {min : 768, max : 3000},
            items : 5
        }
    }

    const coinApi = useCoinApi()
    
    const {status, coinsList} = useSelector((state : RootState) => state.carouselSlice)

    const showData = () =>
        coinsList.map((coin : ICarouselItem) => <CarouselItem item={coin}/>)

    

    useEffect(()=>{
        coinApi.getTrendingCoins()
    }, [])

    return(
        <MultiCarousel 
            responsive={responsive} 
            infinite 
            autoPlay 
            autoPlaySpeed={3000} 
            arrows={false}
            >
            {showData()}
        </MultiCarousel>
    )
}
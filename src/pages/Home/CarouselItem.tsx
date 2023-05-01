import { ICarouselItem } from "../../interfaces/ICarouselItem"

interface Props {
    item : ICarouselItem
}

export function CarouselItem(props : Props){
    const {
        image,
        symbol,
        currentPrice,
        priceChange
    } = props.item

    const formatter = new Intl.NumberFormat("en-US", {
        style : "currency",
        currency : "USD",
    })

    const priceChangeStyle = priceChange < 0 ? "text-danger" : "text-success"

    const formatedPriceChange = (priceChange >= 0 ? "+" : "") + priceChange.toFixed(3) + "%"

    return (
        <div className="d-inline-flex flex-column p-2 align-items-center">
            <div className="carousel-item-image rounded">
                <img className="w-100 h-100" src={image} alt="currency image" />
            </div>
            <div className="text-white fs-6" >{symbol.toUpperCase()} <span className={priceChangeStyle}>{formatedPriceChange}</span></div>
            <div className="text-white fs-5">{formatter.format(currentPrice)}</div>
        </div>
    )
}
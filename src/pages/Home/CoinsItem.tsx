import { ICoinsItem } from "../../interfaces/ICoinsItem";
import * as NumberFormatter from "../../utils/NumberFormatter"


interface Props{
    item : ICoinsItem
}

export function CoinsItem(props : Props){
    const {
        name,
        symbol,
        image,
        marketCap,
        priceChange,
        currentPrice
    } = props.item

    const formatedSymbol = symbol.toUpperCase()
    const formatedPriceChange = (priceChange >= 0 ? "+" : "") + priceChange.toFixed(3) + "%"
    const formatedPrice = NumberFormatter.formatToCurrency(currentPrice)
    const formatedMarketCap = NumberFormatter.formatToCurrency(marketCap, true)
    const priceChangeStyle = priceChange < 0 ? "text-danger" : "text-success"


    return (
        <div className="p-2 d-flex gap-2 align-items-center text-white border-top">
            <div className="col d-flex gap-1 align-items-center">
                <div className="coins-item-image p-2">
                    <img className="w-100 h-100" src={image} alt="coin logo" />
                </div>
                <div>
                    <div>{formatedSymbol}</div>
                    <div>{name}</div>
                </div>
            </div>
            <div className="col">{formatedPrice}</div>
            <div className={"col " + priceChangeStyle }>{formatedPriceChange}</div>
            <div className="col">{formatedMarketCap}</div>
        </div>
    )
}

export function formatToCurrency(price : number, compact : boolean = false){
    const formatter = new Intl.NumberFormat("en-US", {
        style : "currency",
        currency : "USD",
        maximumFractionDigits : 2,
        notation : compact ? "compact" : "standard"
    })

    return formatter.format(price)
}
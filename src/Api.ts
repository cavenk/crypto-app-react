
const BASE_URL = "https://api.coingecko.com/api/v3"

export function trendingUrl(){
    return BASE_URL + "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
}

export function allCoins(page : number = 1){
    const pageLimit : number = 100
    return BASE_URL + `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${pageLimit}&page=${page}&sparkline=false&locale=en`
    
}
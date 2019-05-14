

import axios from "axios";


export function retrieveStockMarketQuotes(tickers) {

    let promises = tickers.map(ticker => {
        return axios.get(`https://api.iextrading.com/1.0/stock/${ticker}/quote`)
    });

    return axios.all(promises);
}

import * as api from "../api";
import * as Constants from "../Constants/constants";
import Axios from "axios";

export function retrieveMarketTickers(tickers) {

    return dispatch => {

        return api.retrieveStockMarketQuotes(tickers).then(tickerInfo => {
            const data = tickerInfo.map(r => r.data);
            dispatch({
                type: Constants.RECEIVE_ALL_MARKET_TICKERS, 
                data
            })
        })
    }
}


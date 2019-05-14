import { combineReducers } from 'redux';

import * as Constants from '../Constants/constants';

const initialState = Immutable.Map({
    currentTickers: Immutable.List()
})

function main(state = initialState, action) {
    
    switch (action.type) {

        case Constants.RECEIVE_ALL_MARKET_TICKERS:

            return state.set("currentTickers", Immutable.fromJS(action.data));
            // return state.withMutations(s => {
            //     s.set("homePageTickers", Immutable.fromJS(action.data.data))
            // });

        default:
            return state
    }
}

export default combineReducers({main});
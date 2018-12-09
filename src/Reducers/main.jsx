import { combineReducers } from 'redux';

const initialState = Immutable.Map({
})

function main(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({main});
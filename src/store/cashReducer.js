const defaultState = {
    cash: 0,
}

const TOP_UP = "TOP_UP";
const WITHDRAW = "WITHDRAW";

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOP_UP:
            return {...state, cash: state.cash + action.payload}
        case WITHDRAW:
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}

export const topUpAction = (payload) => ({type: TOP_UP, payload})
export const withdrawAction = (payload) => ({type: WITHDRAW, payload})
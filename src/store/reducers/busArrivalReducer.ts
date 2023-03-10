import {BusArrivalActions, BusArrivalInfoActionTypes, IBusArrivalState} from "../../types/busArrivals/types";

const initialState: IBusArrivalState = {
    busArrivalInfo: [],
    isLoading: false,
    error: false,
}

export const busArrivalReducer = (state = initialState, action: BusArrivalActions): IBusArrivalState => {
    switch (action.type) {

        case BusArrivalInfoActionTypes.FETCH_BUS_LINE: {
            return {...state, busArrivalInfo: action.payload, isLoading: false, error: false}
        }

        case BusArrivalInfoActionTypes.INFO_IS_LOADING: {
            return {...state, isLoading: true}
        }

        case BusArrivalInfoActionTypes.IS_ERROR: {
            return {...state, error: true, isLoading: false}
        }

        default: {
            return state;
        }
    }
}
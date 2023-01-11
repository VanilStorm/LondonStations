import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as BikesPosActionCreators from "../store/actions/map"


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(BikesPosActionCreators, dispatch);
}
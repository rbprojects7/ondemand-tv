import { Dispatch } from "redux";
import axios from 'axios';
import { isShowAvailable } from "./show.helpers";
import { api, FETCHED_SHOW_DETAILS, SHOW_DETAILS_FETCH_FAILED, errorFiller, fetchingShowData } from "../../constants";

const addShowDetails = (data) => ({ type: FETCHED_SHOW_DETAILS, payload: { data } });

const addShowDetailsFailed = () => ({ type: SHOW_DETAILS_FETCH_FAILED, payload: { data: errorFiller } });

export const getShow = (id: string) => async (dispatch: Dispatch, getState) => {
    const presentState = getState();
    if (presentState) {
        const { currentShow } = presentState;
        if (currentShow && isShowAvailable(id, currentShow)) {
            return;
        }
    }
    dispatch(addShowDetails(fetchingShowData));
    try {
        const { data } = await axios.get(`${api.baseUrl}/shows/${id}`);
        return dispatch(addShowDetails(data));
    } catch (error) {
        console.error(error);
        return dispatch(addShowDetailsFailed());
    }
};
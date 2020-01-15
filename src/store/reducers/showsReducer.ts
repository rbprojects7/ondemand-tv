import { FETCHED_SHOW_DETAILS, SHOW_DETAILS_FETCH_FAILED } from "../../constants";

const initialState = {
    name: undefined,
    description: undefined,
};

export const currentShow = (state = {...initialState}, { type, payload }) => {
    switch (type) {
        case FETCHED_SHOW_DETAILS:
            return { ...state, ...payload.data };
        case SHOW_DETAILS_FETCH_FAILED:
            return { ...state, ...payload.data };
        default:
            return state;
    }
}
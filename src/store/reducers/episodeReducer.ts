import { FETCHED_EPISODE_DETAILS, EPISODE_DETAILS_FETCH_FAILED, FETCHING_EPISODE_DETAILS, FETCHED_EPISODE_DETAILS_INFO, FAILED_EPISODE_DETAILS_INFO } from "../../constants";

const initialState = {
    episodes: undefined,
    fetchingEpisodes: false,
    current: undefined,
};

export const episodes = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case FETCHED_EPISODE_DETAILS:
            return { ...state, episodes: payload.data, fetchingEpisodes: false };
        case EPISODE_DETAILS_FETCH_FAILED:
            return { ...state, episodes: payload.data, fetchingEpisodes: false };
        case FETCHING_EPISODE_DETAILS:
            return { ...state, fetchingEpisodes: true };
        case FETCHED_EPISODE_DETAILS_INFO:
            return { ...state, currentEpisode: payload };
        case FAILED_EPISODE_DETAILS_INFO:
            return { ...state, error: payload };
        default:
            return state;
    }
}
import axios from 'axios';
import { Dispatch } from 'redux';
import { api, FETCHED_EPISODE_DETAILS, EPISODE_DETAILS_FETCH_FAILED, FETCHING_EPISODE_DETAILS, errorFiller } from '../../constants';

const fetchingEpisodes = () => ({ type: FETCHING_EPISODE_DETAILS });

const addEpisodes = (data) => ({ type: FETCHED_EPISODE_DETAILS, payload: { data } });

const addEpisodesFailed = () => ({ type: EPISODE_DETAILS_FETCH_FAILED, payload: { data: errorFiller } });

export const getEpisodes = (showId: string) => async (dispatch: Dispatch) => {
    dispatch(fetchingEpisodes());
    try {
        const { data } = await axios.get(`${api.baseUrl}/shows/${showId}/episodes`);
        return dispatch(addEpisodes(data));
    } catch (error) {
        console.error(error);
        return dispatch(addEpisodesFailed());
    }
};

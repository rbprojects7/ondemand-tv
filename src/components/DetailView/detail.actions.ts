import axios from 'axios';
import { Dispatch } from 'redux';
import { api, FETCHED_EPISODE_DETAILS_INFO, FAILED_EPISODE_DETAILS_INFO } from '../../constants';
import { getEpisodeFromStore } from './detail.helpers';

const getEpisodeDetails = (data) => ({ type: FETCHED_EPISODE_DETAILS_INFO, payload: data });

const episodeDetailsFailed = () => ({ type: FAILED_EPISODE_DETAILS_INFO, payload: { data: '' } });

export const getSeasonEpisode = (showId: string, season: number, number: number) => async (dispatch: Dispatch, getState) => {
    const state = getState();
    const episode = getEpisodeFromStore(state, season, number);

    if (episode) {
        dispatch(getEpisodeDetails(episode));
        return;
    }
    
    try {
        const { data } = await axios.get(`${api.baseUrl}/shows/${showId}/episodebynumber?season=${season}&number=${number}`);
        return dispatch(getEpisodeDetails(data));
    } catch (error) {
        console.error(error);
        dispatch(episodeDetailsFailed());
    }
}

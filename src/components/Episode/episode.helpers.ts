import { reverse, values } from 'lodash';

export const getEpisodeList = (episodes) => reverse(values(episodes.reduce((episodeList, episode) => {
    if (!episodeList[episode.season]) {
        episodeList[episode.season] = [];
    }
    episodeList[episode.season].push(episode);
    return episodeList;
}, {})));

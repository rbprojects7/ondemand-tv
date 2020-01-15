import React, { Fragment, useEffect } from 'react';
import { map, values } from 'lodash';
import { getEpisodeList } from './episode.helpers';
import { EpisodeTable } from './episodeTable';
import { IEpisodes } from './episode.interface';

export const Episode = ({ showId, getEpisodes, episodes }: IEpisodes): JSX.Element => {
    useEffect(() => {
        if (showId) {
            getEpisodes(showId);
        }
    }, [showId, getEpisodes]);

    return (<Fragment>
        {episodes && episodes.episodes
            && !episodes.fetchingEpisodes
            && map(values(getEpisodeList(episodes.episodes)), (episodesInList, itr) => (<EpisodeTable showId={showId} key={itr} episodes={episodesInList} />))}
    </Fragment>);
}
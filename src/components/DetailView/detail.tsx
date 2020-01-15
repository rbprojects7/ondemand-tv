import React, { Fragment, useEffect } from 'react';
import { IDetail } from './detail.interface';
import { ShowDetail } from '../ShowDetail';
import { errorFiller } from '../../constants';

export const Detail = ({ name = errorFiller.name, summary, showName, match, covers = errorFiller.image, getSeasonEpisode, getShow }: IDetail) => {
    useEffect(() => {
        const { showId, season, number } = (match && match.params) || {};
        if (showId && season && number) {
            getSeasonEpisode(showId, season, number);
            getShow(showId);
          }      
    }, [match]);

    return (<Fragment>
        <ShowDetail
            name={`${name} - ${showName}`}
            summary={summary}
            {...covers}
        />
    </Fragment>);
}
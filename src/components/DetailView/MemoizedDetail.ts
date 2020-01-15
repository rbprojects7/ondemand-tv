import { connect } from 'react-redux';
import { memo } from 'react';
import { getShow } from '../Show/show.actions';
import { getName, selectCurrentEpisode, selectCovers } from '../../selectors';
import { Detail } from './detail';
import { getSeasonEpisode } from './detail.actions';
import { IDetail } from './detail.interface';
import { Dispatch } from 'redux';

type DispatchToPropsMap = Pick<IDetail, 'getShow' | 'getSeasonEpisode'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsMap => ({
    getSeasonEpisode: (showId: string, season: number, number: number): void => dispatch<any>(getSeasonEpisode(showId, season, number)),
    getShow: (id): void => dispatch<any>(getShow(id)),
});

type StateToPropsMap = Pick<IDetail, 'covers' | 'showName'>;

const mapStateToProps = (state): StateToPropsMap => {
    const { episodes, currentShow } = state;
    return {
        ...selectCurrentEpisode(episodes),
        covers: selectCovers(episodes),
        showName: getName(currentShow),
    }
}

export const MemoizedDetail = connect(mapStateToProps, mapDispatchToProps)(memo(Detail));
  
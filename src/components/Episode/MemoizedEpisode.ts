import { connect } from 'react-redux';
import { Episode } from './episode';
import { getEpisodes } from './episode.actions';
import { memo } from 'react';
import { Dispatch } from 'redux';
import { IEpisodes } from './episode.interface';

type DispatchToPropsMap = Pick<IEpisodes, 'getEpisodes'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsMap => ({
    getEpisodes: (id): void => dispatch<any>(getEpisodes(id)),
});

type StateToPropsMap = Pick<IEpisodes, 'episodes'>;

const mapStateToProps = (state: StateToPropsMap): StateToPropsMap => {
    const { episodes } = state;
    return {
        episodes,
    }
}

export const MemoizedEpisode = connect(mapStateToProps, mapDispatchToProps)(memo(Episode));

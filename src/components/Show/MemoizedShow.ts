import { memo } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getName, getCoverLinks, getSummary } from '../../selectors';
import { IShow } from './show.interface';
import { getShow } from './show.actions';
import { Show } from './show';

type StateToPropsMap = Pick<IShow, 'name' | 'summary' | 'covers'>;

const mapStateToProps = (state): StateToPropsMap  => {
    const { currentShow } = state;
    const name = getName(currentShow);
    const summary = getSummary(currentShow);
    const covers = getCoverLinks(currentShow);
    return {
        name,
        summary,
        covers,
    }
};

type DispatchToPropsMap = Pick<IShow, 'getShowDetails'>;

const mapDispatchToProps = (dispatch: Dispatch): DispatchToPropsMap => ({
    getShowDetails: (id: string): void => dispatch<any>(getShow(id)),
});

export const MemoizedShow = connect(
    mapStateToProps,
    mapDispatchToProps,
)(memo(Show));
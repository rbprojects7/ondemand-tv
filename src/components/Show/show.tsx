import React, { useEffect, Fragment } from "react";
import { IShow } from "./show.interface";
import { ShowDetail } from "../ShowDetail";
import { GlobalTableStyle } from "./show.style";
import { MemoizedEpisode } from "../Episode";

export const Show = ({ covers, summary, getShowDetails, match, name }: IShow) => {
    const showId = match && match.params && match.params.showId;

    useEffect(() => {
        if (getShowDetails) {
            getShowDetails(showId);
        }
    }, [getShowDetails, showId]);

    return (<Fragment>
        <GlobalTableStyle />
        <ShowDetail
            name={name}
            summary={summary}
            {...covers}
        />
        <MemoizedEpisode showId={showId} />
    </Fragment>);
};

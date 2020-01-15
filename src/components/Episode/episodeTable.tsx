import React from 'react';
import { map, isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledHeader } from '../ShowDetail';
import { IEpisode } from './episode.interface';

export const EpisodeTable = ({ episodes, showId }: IEpisode): JSX.Element => (<StyledContainer>
    {episodes && !isEmpty(episodes) && <StyledHeader>Season {episodes[0].season}</StyledHeader>}
    <table>
        <tbody>
            <tr className="hidden">
                <th>Number</th>
                <th>Date</th>
                <th>Name</th>
            </tr>
            {map(episodes, episode => (
                <tr key={episode.id}>
                    {episode.number && <td>{episode.number}</td>}
                    {episode.airdate && <td>{episode.airdate}</td>}
                    {episode.name && <td><Link to={`/show/${showId}/episodes/${episode.season}/${episode.number}`}>{episode.name}</Link></td>}
                </tr>
            ))}
        </tbody>
    </table>
</StyledContainer>);

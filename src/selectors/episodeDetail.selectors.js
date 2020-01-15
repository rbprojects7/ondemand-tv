import { createSelector } from 'reselect';
import { errorFiller } from '../constants';

export const selectCovers = createSelector(
  episodes => episodes.currentEpisode,
  episode => ({
    original: (episode && episode.image && episode.image.original) || errorFiller.image.original,
    medium: (episode && episode.image && episode.image.medium) || errorFiller.image.medium,
  }),
);

export const selectCurrentEpisode = createSelector(
  episodes => episodes.currentEpisode,
  (episode) => {
    if (!episode) return null;

    return {
      name: episode.name,
      summary: episode.summary || errorFiller.summary,
      airdate: episode.airdate,
    };
  },
);

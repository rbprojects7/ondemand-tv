import { createSelector } from 'reselect';

export const getName = createSelector(currentShow => currentShow && currentShow.name, name => name);

export const getSummary = createSelector(
    currentShow => currentShow && currentShow.summary,
    summary => summary,
);

export const getCoverLinks = createSelector(
    currentShow => currentShow && currentShow.image,
    items => ({
        original: items && items.original,
        medium: items && items.medium,
    }),
);


export const getEpisodeFromStore = (state, season, number) => {
    const episodesList = state && state.episodes;
    const episodes = episodesList && episodesList.episodes;
  
    if (!Array.isArray(episodes)) return null;
  
    return episodes.find(episode => episode.season === (season + 1) && episode.number === (number + 1));
  };
  
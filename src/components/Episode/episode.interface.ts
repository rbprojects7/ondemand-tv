export interface IEpisode {
    showId: string;
    episodes?: {
        number: number,
        airdate: string,
        season: number,
        name: string,
    }
}

export interface IEpisodes {
    showId: string;
    getEpisodes: (id: string) => void;
    episodes?: {
        episodes?: any,
        fetchingEpisodes?: boolean,
        currentEpisode?: any,
    }
}
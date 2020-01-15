export interface ICoverImage {
    medium: string;
    original: string;
}

export interface IRouteParams {
    params: {
        showId: string,
        season?: number,
        number?: number,
    };
    path,
}

export interface IShow {
    covers?: ICoverImage;
    summary: string;
    getShowDetails: (showId: string) => void;
    match: IRouteParams,
    name: string;
}

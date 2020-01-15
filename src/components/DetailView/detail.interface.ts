import { IRouteParams, ICoverImage } from "../Show/show.interface";

export interface IDetail {
    getSeasonEpisode: (id: string, season: number, number: number) => void;
    getShow: (id: string) => void;
    match: IRouteParams,
    name: string;
    summary: string;
    showName?: string;
    covers?: ICoverImage;
}
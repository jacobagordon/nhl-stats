import { IGameInfo } from "./IGameInfo";

export interface ISchedule {
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    dates: [{
        date: string;
        totalItems: number;
        totalEvents: number;
        totalGames: number;
        totalMatches: number;
        games: [IGameInfo];
        events?: [];
        matches?: []
    }];
}
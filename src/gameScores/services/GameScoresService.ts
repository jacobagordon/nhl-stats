import { ISchedule } from "../interfaces";

export const getTodaysGames = async (): Promise<ISchedule | undefined> => {
    try {
        const response = await fetch('https://statsapi.web.nhl.com/api/v1/schedule');
        const scheduleData = await response.json();
        return scheduleData as ISchedule;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
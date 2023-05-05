import { Button } from "@mui/material"
import { StyledGameScoreboardHeader } from "../styles"
import { getTodaysGames } from "../services";
import { ISchedule } from "../interfaces";

export const GameScoreboardHeaader = (): React.ReactElement => {
    var test: ISchedule | undefined;
    let buttonLabel: string | undefined = 'Click Me';
    
    const handleOnClick = (): void => {
        getTodaysGames().then(data => {
            test = data;
            //buttonLabel = test?.dates[0]?.games[0]?.teams.home.team.name ?? '';
            console.log(test);
        }).catch(error => {
            console.error(error);
        })
    };

    return (
        <StyledGameScoreboardHeader>
            <Button onClick={() => handleOnClick}>{buttonLabel}</Button>
        </StyledGameScoreboardHeader>
    )
} 
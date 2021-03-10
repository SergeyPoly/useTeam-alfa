import defaultAvatar from "../../../assets/images/team/defaultAvatar.png"


export const getOverviewTeamProps = (team) =>{
    const avatar = team.avatar || defaultAvatar;
    const winMatches = team.matches.filter( ({result})=>result==="win");
    const winrate = (team.matches.length ===0) ? 0 : Math.round(winMatches.length/team.matches.length *100);
    return {
        name: 'Baby Yoda’s Team',
        avatar: avatar,
        statistics: [
            {
                title: 'Matches',
                value: team.matches.length,
            },
            {
                title: 'Tornaments',
                value: team.tournaments.length,
            },
            {
                title: 'Winrate',
                value: `${winrate}%`,
            },
            {
                title: 'Cups',
                value: team.cups,
            },
            {
                title: 'Teammates',
                value: team.teammates.length,
            },
        ],
        button: "Edit team"
    }
}

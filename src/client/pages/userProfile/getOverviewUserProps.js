import userDefault from  "../../../assets/images/userProfile/unloader.svg"

export const getOverviewUserProps = (user) =>{
    const avatar = user.avatar || userDefault
    console.log(avatar);
    const winMatches = user.matches.filter( ({result})=>result==="win");
    const winrate = (user.matches.length ===0) ? 0 : Math.round(winMatches.length/user.matches.length *100);
    return {
        name: 'Baby Yoda’s Team',
        avatar: avatar,
        statistics: [
            {
                title: 'Matches',
                value: user.matches.length,
            },
            {
                title: 'Tornaments',
                value: user.tournaments.length,
            },
            {
                title: 'Winrate',
                value: `${winrate}%`,
            },
            {
                title: 'Cups',
                value: user.cups,
            },
        ],
        button: "Edit team"
    }
}

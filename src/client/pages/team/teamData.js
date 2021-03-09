import teamAvatar from '../../../assets/images/team/teamAvatar.jpg';

export const teamData = {
    id: 1,
    name: 'Baby Yoda’s Team',
    cups: 3,
    avatar: {teamAvatar},
    winrate: 85,
    date: "Nov 3, 2020 13:47",
    owner: 1, //player id
    matches: [
        {
            id: 1,
            result: "win"
        },
        {
            id: 2,
            result: "team win"
        },
        {
            id: 3,
            result: "win"
        }
    ],
    teammates: [1,2,3,4,5,6,7],
    tournaments: [
        {
            id:1,
            result: "1/4"
        },
        {
            id:2,
            result: "winner"
        },
        {
            id:3,
            result: "1/4"
        },{
            id:4,
            result: "1/4"
        }

    ]


}

import teamAvatar from '../../../assets/images/team/teamAvatar.jpg';
import avatar from './components/Teammates/PlayerAvatar.png';


export const teamData = {
    id: 1,
    name: 'Baby Yoda’s Team',
    cups: 3,
    avatar: teamAvatar,
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
    teammates: ['2', '3', '4', '5', '6', '7', '8','9'],
    tournaments: [
        {
            id:"51",
            result: "1/4"
        },
        {
            id:"52",
            result: "Winner"
        },
        {
            id:"53",
            result: "1/4"
        },
        {
            id:"54",
            result: "Winner"
        },
        {
            id:"55",
            result: "1/2"
        },
        {
            id:"56",
            result: "1/8"
        },
        {
            id:"57",
            result: "Winner"
        },
        {
            id:"58",
            result: "1/4"
        },
    ],
    tournamentHistory: {
        tournaments: [],
        countLoading: 5,
    },
    teamAvatarImg: teamAvatar,
    listTeammates: [
        {
            avatar: avatar,
            name: 'Anasurimbor Kiborg',
            matches: 250,
            tournaments: 250,
            winrate: '50%',
            cups: 1,
        },
        {
            avatar: avatar,
            name: 'Anasurimbor Kiborgdfgsdfgsdfdsafasdfsdfgsdfg',
            matches: 250,
            tournaments: 250,
            winrate: '50%',
            cups: 1,
        },
    ],

}

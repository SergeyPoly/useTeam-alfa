import userAvatar from "../../../../assets/images/userProfile/userAvatar-2x.jpg";
import playerAvatar from '../../../../assets/images/tournaments/player_avatar_normal1.png';
import mediumPlayerAvatar
    from '../../../../assets/images/tournaments/player_avatar_medium1.png';
import smallPlayerAvatar
    from '../../../../assets/images/tournaments/player_avatar_small1.png';

export const userProfileData = {
    id: 1,
    name: "Player1",
    avatar: userAvatar,
    cups: 3,
    charge: 750,
    balance: 1000, //balance in dollars
    steam: null, //url steam
    team: {
        id: "1", //team id
        isOwner: true  // for button "edit team"
    },
    matches: [
        {
            id: 1,
            result: "win"
        },
        {
            id: 2,
            result: "1/4"
        },
        {
            id: 3,
            result: "win"
        }
    ],
    tournaments: [
        {
            id:"51",
            role: "In team",
            result: "Winner",
            team: "1"
        },
        {
            id:"52",
            role: "Core",
            result: "Winner",
            team: "2"
        },
        {
            id:"53",
            role: "Support",
            result: "1/4",
            team: "1"
        },
        {
            id:"54",
            role: "Core",
            result: "Winner",
            team: "2"
        },
        {
            id:"55",
            role: "Core",
            result: "Winner",
            team: "1"
        },

        {
            id:"56",
            role: "Core",
            result: "1/4",
            team: "1"
        },
        {
            id:"57",
            role: "Core",
            result: "Winner",
            team: "1"
        },
        {
            id:"58",
            role: "Core",
            result: "1/4",
            team: "2"
        },
    ],
    tournamentHistory: {
        tournaments: [],
        countLoading: 5
    },
    invites: [],
    tournamentTeams: ['5', '15', '25'],
    statistics: {
        matches: '250',
        tournaments: '50',
        cups: '1',
    },
    avatarImg: playerAvatar,
    mediumAvatarImg: mediumPlayerAvatar,
    smallAvatarImg: smallPlayerAvatar,

}

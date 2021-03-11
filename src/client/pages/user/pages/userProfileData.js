import userAvatar from "../../../../assets/images/userProfile/userAvatar-2x.jpg";
import tournamentImg from "../../../../assets/images/tournaments/tournament_small_image.png";
import teamAvatar from "../../../../assets/images/userProfile/team-avatar.jpg";
import playerAvatar from '../../../../assets/images/tournaments/player_avatar_normal1.png';
import mediumPlayerAvatar
    from '../../../../assets/images/tournaments/player_avatar_medium1.png';
import smallPlayerAvatar
    from '../../../../assets/images/tournaments/player_avatar_small1.png';

export const userProfileData = {
    id: 1,
    name: "Not Enot",
    avatarImg: userAvatar,
    cups: 3,
    charge: 750,
    balance: 1000, //balance in dollars
    steam: null, //url steam
    team: {
        id: 1, //team id
        isOwner: true  // for button "edit team"
    },
    additionalTeams: [
        {
            id: '2',
            name: 'Jabba’sTeam 2',
            date: 'Nov 3, 2020 13:47',
            imgSrc: teamAvatar,
            invitation : {
                itemHeading: 'Naga Bank',
                prizePool: {
                    currencyValue: 'money',
                    amount: '3000',
                },
                entry: '20',
                imgSrc: tournamentImg,
            },
        }
    ],
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
            id: 1,
            role: "In team",
            result: "win"
        },
        {
            id: 2,
            role: "Core",
            result: "1/4"
        },
        {
            id: 3,
            role: "Support",
            result: "1/4"
        }
    ],
    invites: [
        {
            id: '1',
            name: 'Jabba’sTeam 1',
            imgSrc: teamAvatar
        }
    ],
    tournamentTeams: ['5', '15', '25'],
    statistics: {
        matches: '250',
        tournaments: '50',
        winrate: '81%',
        cups: '2',
    },
    // avatarImg: playerAvatar,
    // mediumAvatarImg: mediumPlayerAvatar,
    // smallAvatarImg: smallPlayerAvatar,
}

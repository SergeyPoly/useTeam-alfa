// import userAvatar
//     from '../../../../assets/images/userProfile/userAvatar-2x.jpg';
// import teamAvatar from '../../../../assets/images/userProfile/team-avatar.jpg';
// import tournamentImg
//     from '../../../../assets/images/tournaments/tournament_small_image.png';

export const testUsersData = [
    {
        id: '1',
        name: "Not Enot",
        avatarImg: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/userAvatar-2x_iwk4pz.jpg",
        cups: 3,
        charge: 850,
        balance: 1000, //balance in dollars
        steam: null, //url steam
        team: {
            id: "1", //team id
            isOwner: true,  // for button "edit team"
            imgSrc: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/team-avatar_rhhhxe.jpg",
            name: 'Jabba’sTeam 1',
            date: 'Nov 3, 2020 13:47',
        },
        additionalTeams: [],
        invites: [],
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
        tournamentTeams: ['5', '15', '25'],
        statistics: {
            matches: '250',
            tournaments: '50',
            winrate: '81%',
            cups: '2',
        },
    },
    {
        id: '2',
        name: "Not Kot",
        avatarImg: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/userAvatar-2x_iwk4pz.jpg",
        cups: 3,
        charge: 500,
        balance: 1000, //balance in dollars
        steam: null, //url steam
        team: null,
        additionalTeams: [
            {
                id: '1',
                name: 'Jabba’sTeam 1',
                date: 'Nov 3, 2020 13:47',
                imgSrc: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/team-avatar_rhhhxe.jpg",
                invitation: {
                    itemHeading: 'Naga Bank',
                    prizePool: {
                        currencyValue: 'money',
                        amount: '3000',
                    },
                    entry: '20',
                    imgSrc: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498968/useTeam/photoUserProfile/tournament_item_image_nm8f3d.png",
                },
            }
        ],
        invites: [],
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
        tournamentTeams: ['5', '15', '25'],
        statistics: {
            matches: '250',
            tournaments: '50',
            winrate: '81%',
            cups: '2',
        },
    },
    {
        id: '3',
        name: "Not Crot",
        avatarImg: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/userAvatar-2x_iwk4pz.jpg",
        cups: 3,
        charge: 400,
        balance: 1000, //balance in dollars
        steam: null, //url steam
        team: null,
        additionalTeams: [],
        invites: [
            {
                id: '1',
                name: 'Jabba’sTeam 1',
                imgSrc: "https://res.cloudinary.com/dk88eyahu/image/upload/v1615498880/useTeam/photoUserProfile/team-avatar_rhhhxe.jpg"
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
        tournamentTeams: ['5', '15', '25'],
        statistics: {
            matches: '250',
            tournaments: '50',
            winrate: '81%',
            cups: '2',
        },
    }
];

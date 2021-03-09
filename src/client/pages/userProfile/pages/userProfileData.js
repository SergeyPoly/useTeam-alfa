import userAvatar from "../../../../assets/images/userProfile/userAvatar-2x.jpg"

export const userProfileData = {
    id: 1,
    name: "Player1",
    avatar: {userAvatar},
    cups: 3,
    charge: 750,
    balance: 1000, //balance in dollars
    steam: null, //url steam
    team: {
        id: 1, //team id
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
    invites: []
}

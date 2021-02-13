import { v4 } from 'uuid';

export const linksAuth = [
    {
        id: v4(),
        to: '/',
        text: 'Profile',
    },
    {
        id: v4(),
        to: '/team/',
        text: 'Team',
    },
    {
        id: v4(),
        to: '/tournaments/',
        text: 'Tournaments',
    },
];

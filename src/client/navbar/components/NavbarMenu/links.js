import { v4 } from 'uuid';

export const links = [
    {
        id: v4(),
        to: '/',
        text: 'Home',
    },
    {
        id: v4(),
        to: '/tournaments',
        text: 'Tournaments',
    },
];

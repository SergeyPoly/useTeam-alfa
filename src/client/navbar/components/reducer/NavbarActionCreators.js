import {
    SET_ACCOUNT_BALANCE,
    SET_AUTH_DATA,
    SET_INVITE_DATA,
} from './NavbarActions';

export const setAccountBalance = (payload) => {
    return { type: SET_ACCOUNT_BALANCE, payload }
};

export const setAuthData = () => {
    return { type: SET_AUTH_DATA }
};

export const setInviteData = () => {
    return { type: SET_INVITE_DATA }
};



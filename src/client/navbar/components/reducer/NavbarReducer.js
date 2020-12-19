import {
    SET_ACCOUNT_BALANCE, SET_AUTH_DATA, SET_INVITE_DATA,
} from './NavbarActions';

const initialState = {
    accountBalance: 725,
    isAuth: false,
    invited: true,
};

export const navbarReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_ACCOUNT_BALANCE:
            return { ...state, accountBalance: payload };
        case SET_AUTH_DATA:
            return { ...state, isAuth: !state.isAuth };
        case SET_INVITE_DATA:
            return { ...state, invited: !state.invited };
        default:
            return state;
    }
};

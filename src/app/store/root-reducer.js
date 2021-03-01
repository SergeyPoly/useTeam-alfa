import { combineReducers } from '@reduxjs/toolkit';
import { apiReducer } from '../../client/mainPage/reducer/ApiReducer';
import { navbarReducer } from '../../client/navbar/components/reducer/NavbarReducer';

const rootReducer = combineReducers({
    navbar: navbarReducer,
    api:apiReducer,
});

export default rootReducer;

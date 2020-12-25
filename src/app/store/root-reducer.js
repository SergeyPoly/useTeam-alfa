import { combineReducers } from '@reduxjs/toolkit';
import { navbarReducer } from '../../client/navbar/components/reducer/NavbarReducer';

const rootReducer = combineReducers({
    navbar: navbarReducer,
});

export default rootReducer;

import React from 'react';

import './Navbar.scss'
import { NavLinks } from '../NavLinks';

export const Navbar = () => {
    const isAuth = true; // no data available yet
    const invited = true; // no data available yet

    return (
        <div className='navbar'>
            {/*<Logo/>*/}
            <NavLinks
                isAuth={isAuth}
                invited={invited}
            />
            {/*<Button />*/}
        </div>
    );
};

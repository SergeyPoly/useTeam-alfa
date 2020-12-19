import React from 'react';

import '../../../shared/styles/scss/style.scss';
import { AppRoutes } from '../../routes';
import { Footer } from '../../../client/footer/components/Footer';

export const App = () => {
    return (
        <>
            <div className={'app-wraper'}>
                <div className={'app-navbar'}>

                </div>
                <div className={'app-content'}>
                    <AppRoutes />
                </div>
                <div className={'app-footer'}>
                    <Footer />
                </div>
            </div>
        </>
    );
};

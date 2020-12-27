import React from 'react';

import styles from './Footer.module.scss'
import Logo from '../../../../shared/components/Logo';
import { FooterText } from '../FooterText';
import FooterMenu from '../FooterMenu';

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={`${styles.footer__content} container`}>
                <div className='column-2'>
                    <Logo text={'useTeam'}/>
                </div>
                <div className='column-7'>
                    <FooterText
                        text={'Valve, the Valve logo, the Steam logo, Dota 2 and Dota 2 logo are trademarks and/or registered trademarks of Valve Corporation.'}
                    />
                </div>
                <div className='column-3'>
                    <FooterMenu/>
                </div>
            </div>
        </div>
    );
};

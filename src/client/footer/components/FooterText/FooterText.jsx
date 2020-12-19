import React from 'react';

import styles from './FooterText.module.scss'

export const FooterText = () => {

    return (
        <div className={styles.footer_text}>
            <p >
                Valve, the Valve logo, the Steam logo, Dota 2 and Dota 2 logo are trademarks and/or registered trademarks of Valve Corporation.
            </p>
            <p className={styles.footer_text__gap}>
                All other trademarks are property of their respective owners.
            </p>
            <p className={styles.footer_text}>
                useTeam is in no way affiliated with or endorsed by Valve Corporation.
            </p>
        </div>
    );
};

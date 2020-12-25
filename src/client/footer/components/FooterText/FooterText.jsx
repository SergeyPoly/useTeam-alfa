import React from 'react';

import styles from './FooterText.module.scss'

export const FooterText = ({text}) => {
    return (
        <div className={styles.footer_text}>
            <p>
                {text}
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

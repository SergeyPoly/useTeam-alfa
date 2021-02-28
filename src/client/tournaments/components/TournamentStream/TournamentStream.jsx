import React from 'react';

import styles from './TournamentStream.module.scss';
import Heading from '../../../../shared/components/Heading';

const TournamentStream = ({streamSrc}) => {

    return (
        <div>
            <Heading type={'block'} text='Tournament Stream'/>
            <div style={{maxWidth: '700px'}}>
                <div className={styles.resp_container}>
                    <iframe
                        className={styles.resp_iframe}
                        src={streamSrc}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
};

export default TournamentStream;

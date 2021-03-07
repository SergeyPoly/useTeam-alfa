import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import Heading from '../../../../../shared/components/Heading';

import styles from './StreamSection.module.scss';

const StreamSection = () => {
    const { streamSrc } = useSelector(({tournamentDetails}) => tournamentDetails.processedTournamentData, shallowEqual);

    return (
        <div>
            <Heading type={'block'} text='Tournament Stream'/>
            <div style={{maxWidth: '700px'}}>
                <div className={styles.resp__container}>
                    <iframe
                        className={styles.resp__iframe}
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

export default StreamSection;

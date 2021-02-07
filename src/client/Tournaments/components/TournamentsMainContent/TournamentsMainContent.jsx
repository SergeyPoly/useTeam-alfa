import React, { useState } from 'react';

import Heading from '../../../../shared/components/Heading';
import Table from '../../../../shared/containers/Table';
import ResultTableItems from '../ResultTableItems';
import miniAvatar from '../../../../assets/images/tournaments/result_miniavatar.png'
import Modal from '../../../../shared/containers/Modal';
import Button from '../../../../shared/components/Button';
import TournamentTerms from '../TournamentTerms';

const TournamentsMainContent = () => {

    const [termsModalStatus, setTermsModalStatus] = useState(false);

    const toggleTermsModal = () => {
        setTermsModalStatus(!termsModalStatus);
    };

    const rowsData = [
        {
            src: miniAvatar,
            name: 'Player1',
            role: 'Support',
            kda: '5 / 10 / 18',
            gpmxpm: '506 / 640',
            dmg: '46,4k',
            networth: '15,5k'
        },
        {
            src: miniAvatar,
            name: 'Player2',
            role: 'Tank',
            kda: '6 / 12 / 15',
            gpmxpm: '420 / 540',
            dmg: '96,7k',
            networth: '16,5k'
        },
        {
            src: miniAvatar,
            name: 'Player3',
            role: 'Heal',
            kda: '3 / 10 / 20',
            gpmxpm: '530 / 580',
            dmg: '15,5k',
            networth: '13,2k'
        },
        {
            src: miniAvatar,
            name: 'Player4',
            role: 'Damage',
            kda: '6 / 20 / 31',
            gpmxpm: '530 / 580',
            dmg: '147,1k',
            networth: '16,7k'
        },
        {
            src: miniAvatar,
            name: 'Player5',
            role: 'Defend',
            kda: '6 / 20 / 31',
            gpmxpm: '530 / 580',
            dmg: '45,3k',
            networth: '16,7k'
        },
    ];

    const termsData = [
        {
            article: 'Rule #1',
            description: 'The first rule of Fight Club is: You do not talk about Fight Club'
        },
        {
            article: 'Rule #2',
            description: 'The second rule of Fight Club is: You do not talk about Fight Club'
        },
    ];

    const tableData = {
        headingText: 'Teamname1',
        winMarker: true,
        tableColTitles: ['players', 'role', 'K / D / a', 'GPM / XPM', 'DmG', 'NET WORTH'],
        maxWidth: '674px',
    };

    return (
        <div>
            <Heading type={'page'} text='Dota 2 tournaments'/>
            <Table tableData={tableData}>
                <ResultTableItems rowsData={rowsData} />
            </Table>
            <Button
                type={'button'}
                classType={'basic'}
                text='CHECK IN'
                handleClick={toggleTermsModal}
            />
            <Modal isOpen={termsModalStatus} toggleModal={toggleTermsModal} minWidth={'500px'} minHeight={'300px'}>
                <TournamentTerms termsData={termsData} />
            </Modal>
        </div>
    );
};

export default TournamentsMainContent;

TournamentsMainContent.defaultProps = {

};

TournamentsMainContent.propTypes = {

};

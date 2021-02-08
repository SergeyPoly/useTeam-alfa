import React, { useState } from 'react';

import Heading from '../../../../shared/components/Heading';
import Table from '../../../../shared/containers/Table';
import ResultTableItems from '../ResultTableItems';
import Modal from '../../../../shared/containers/Modal';
import Button from '../../../../shared/components/Button';
import TournamentTerms from '../TournamentTerms';
import { resultRowsData } from './resultRowsData'

const TournamentsMainContent = () => {

    const [termsModalStatus, setTermsModalStatus] = useState(false);
    const [resultRows, setResultRows] = useState(resultRowsData);

    const toggleTermsModal = () => {
        setTermsModalStatus(!termsModalStatus);
    };

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

    const sorterDMG = () => {
        const sorted = [...resultRows];
        sorted.sort((a, b) => {
            let x = +a.dmg.replace(',', '.').split('k')[0];
            let y = +b.dmg.replace(',', '.').split('k')[0];
            return x < y ? -1 : x > y ? 1 : 0;
        });
        setResultRows(sorted);
    };

    const sorterName = () => {
        const sorted = [...resultRows];
        sorted.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        setResultRows(sorted);
    };

    const resultTableData = {
        headingText: 'Teamname1',
        winMarker: true,
        winMarkerElement: <span className='win-marker'>WIN</span>,
        tableColTitles: [
            {
                name: 'players',
                sorter: sorterName,
            },
            { name: 'role' },
            { name: 'K / D / a' },
            { name: 'GPM / XPM' },
            {
                name: 'DmG',
                sorter: sorterDMG,
            },
            { name: 'NET WORTH' },
        ],
        maxWidth: '674px',
    };

    return (
        <div>
            <Heading type={'page'} text='Dota 2 tournaments'/>
            <Table tableData={resultTableData}>
                <ResultTableItems rowsData={resultRows} />
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


import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { v4 } from 'uuid';

import Table from '../../../../../shared/containers/Table';
import ResultTableItems from '../ResultTableItems';
import Heading from '../../../../../shared/components/Heading';
import { setMatchDetailsData } from '../../reducers/matchDetailsReducer';

import styles from './MatchDetails.module.scss'

const MatchDetails = () => {
    const matchDetailsData = useSelector(({matchDetails}) => matchDetails.matchDetailsData, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();

    const matchDetailsTables = matchDetailsData.map(({team, winner, players}) => {
        const sorterName = (team) => {
            const sorted = [...players];
            sorted.sort((a, b) => {
                let x = a.player.toLowerCase();
                let y = b.player.toLowerCase();
                return x < y ? -1 : x > y ? 1 : 0;
            });
            const sortedMatchDetailsData = matchDetailsData.map(element => element.team === team ? ({...element, players: sorted}) : element);
            dispatch(setMatchDetailsData(sortedMatchDetailsData));
        };

        const sorterDMG = (team) => {
            const sorted = [...players];
            sorted.sort((a, b) => {
                let x = +a.dmg.replace(',', '.').split('k')[0];
                let y = +b.dmg.replace(',', '.').split('k')[0];
                return x < y ? -1 : x > y ? 1 : 0;
            });
            const sortedMatchDetailsData = matchDetailsData.map(element => element.team === team ? ({...element, players: sorted}) : element);
            dispatch(setMatchDetailsData(sortedMatchDetailsData));
        };

        const sorterNetworth = (team) => {
            const sorted = [...players];
            sorted.sort((a, b) => {
                let x = +a.networth.replace(',', '.').split('k')[0];
                let y = +b.networth.replace(',', '.').split('k')[0];
                return x < y ? -1 : x > y ? 1 : 0;
            });
            const sortedMatchDetailsData = matchDetailsData.map(element => element.team === team ? ({...element, players: sorted}) : element);
            dispatch(setMatchDetailsData(sortedMatchDetailsData));
        };

        const matchTableData = {
            headingText: team,
            winMarker: winner,
            winMarkerElement: <span className='win-marker'>WIN</span>,
            tableColTitles: [
                {
                    name: 'players',
                    sorter: () => sorterName(team),
                },
                { name: 'role' },
                { name: 'K / D / A' },
                { name: 'GPM / XPM' },
                {
                    name: 'DmG',
                    sorter: () => sorterDMG(team),
                },
                {
                    name: 'NET WORTH',
                    sorter: () => sorterNetworth(team),
                },
            ],
            maxWidth: '700px',
        };

        return (
            <Table tableData={matchTableData} key={v4()}>
                <ResultTableItems rowsData={players} />
            </Table>
        )
    });

    return (
        <main>
            <div onClick={() => history.goBack()}>
                <Heading
                    type={'page'}
                    text='&#10094;&#10094; back'
                    additionalClass={styles.back_link}
                />
            </div>
            {matchDetailsTables}
        </main>
    );
};

export default MatchDetails;


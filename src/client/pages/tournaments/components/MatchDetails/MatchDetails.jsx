import React from 'react';

import Table from '../../../../../shared/containers/Table';
import ResultTableItems from '../ResultTableItems';
import Button from '../../../../../shared/components/Button';
import {
    setMatchDetailsData,
    toggleMatchDetailsMode,
} from '../../reducers/tournamentDetailsReducer';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styles from './MatchDetails.module.scss'

const MatchDetails = () => {
    const matchDetailsData = useSelector(({tournamentDetails}) => tournamentDetails.matchDetailsData, shallowEqual);
    const dispatch = useDispatch();

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
            maxWidth: '675px',
        };
        return (
            <Table tableData={matchTableData}>
                <ResultTableItems rowsData={players} />
            </Table>
        )
    });

    return (
        <div>
            {matchDetailsTables}
            <Button
                type={'button'}
                classType={'basic'}
                text='&#10094; back'
                additionalClass={styles.back_btn}
                handleClick={() => dispatch(toggleMatchDetailsMode())}
            />
        </div>
    );
};

export default MatchDetails;


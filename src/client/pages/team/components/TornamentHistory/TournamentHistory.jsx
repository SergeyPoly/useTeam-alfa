import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from '../TornamentHistory/TournamentHistory.module.scss';
import Table from '../../../../../shared/containers/Table';
import Button from '../../../../../shared/components/Button';
import { setTournamentsLoading } from '../../../../navbar/reducer/authReducer'
import { useDispatch } from 'react-redux';

const TournamentHistory = props => {
  const { tournamentHistory } = props;
  // const {tournamentName, date, mode, result} = props;
    const dispatch = useDispatch();
    console.log(tournamentHistory)
    const resultTableData = {
        headingText: 'Tournament History',
        winMarker: false,
        tableColTitles: [
            {
                name: 'players',
                // sorter: sorterName,
            },
            { name: 'matches' },
            { name: 'tournaments' },
            { name: 'winrate' }
        ],
        maxWidth: '674px',
    };

    const tournamentHistoryElem = tournamentHistory.map(
        ({ title, date, mode, result }) => (
            <div className={style.tournamentHistory}>
                <span className={style.tournamentHistory__text}>{title}</span>
                <span className={style.tournamentHistory__item}>{date}</span>
                <span className={style.tournamentHistory__item}>{mode}</span>
                <span className={style.tournamentHistory__text}>{result}</span>
            </div>
        ),
    );

    const resultRows =      <div>
                                {tournamentHistoryElem}
                            </div>

  return (
    <div className={style.tournamentHistoryList}>
        <Table tableData={resultTableData}>
            {/*<ResultTableItems rowsData={resultRows} />*/}
            {resultRows}
        </Table>
          <Button
            classType="outline"
            handleClick={() => dispatch(setTournamentsLoading(5))}
            text="Load more"
            additionalClass={style.tournamentHistoryList__btn}
          />
    </div>
  );
};

export default TournamentHistory;

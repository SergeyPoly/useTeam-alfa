import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from '../TornamentHistory/TournamentHistory.module.scss';
import Table from '../../../../../shared/containers/Table';
import Button from '../../../../../shared/components/Button';
import { setTournamentsLoadingUser } from '../../../../navbar/reducer/authReducer'
import { useDispatch, useSelector } from 'react-redux';

const TournamentHistory = (props) => {
  const { tournaments } = props;

  // const {tournamentName, date, mode, role, result} = props;
    const dispatch = useDispatch();
    const resultTableData = {
        headingText: 'Tournament History',
        winMarker: false,
        tableColTitles: [
            {
                name: 'tournament',
                // sorter: sorterName,
            },
            { name: 'date' },
            { name: 'mode' },
            { name: "role" },
            { name: 'result' }
        ],
        maxWidth: '680px',
    };

    const tournamentHistoryElem = tournaments.map(
        ({ title, date, mode, role, result }) => (
            <div className={style.tournamentHistory}>
                <span className={style.tournamentHistory__text}>{title}</span>
                <span className={style.tournamentHistory__item}>{date}</span>
                <span className={style.tournamentHistory__item}>{mode}</span>
                <span className={style.tournamentHistory__item}>{role}</span>
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
            handleClick={() => dispatch(setTournamentsLoadingUser(5))}
            text="Load more"
            additionalClass={style.tournamentHistoryList__btn}
          />
    </div>
  );
};

export default TournamentHistory;

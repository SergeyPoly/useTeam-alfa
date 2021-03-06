import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from './TournamentHistory.module.scss';
import Table from '../../../../shared/components/Table';
import Button from '../../../../../shared/components/Button';

const TournamentHistory = props => {
  const { tournamentHistoryList } = props;
  // const {tournamentName, date, mode, result} = props;

  return (
    <div className={style.tounamentHistory}>
      <Heading type="block" text="Tournament History" />
      <Table list={tournamentHistoryList}>
        <button className={style.teammateBtnKick}>kick</button>
      </Table>
      <Button
        classType="outline"
        handleClick={() => {}}
        text="Load more"
        additionalClass={style.teammateBtn}
      />
    </div>
  );
};

export default TournamentHistory;

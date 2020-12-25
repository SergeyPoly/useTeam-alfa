import React from 'react';
import FormCreateTeam from '../../components/FormCreateTeam';
import style from './TeamPage.module.scss';
import OverviewTeam from '../../components/OverviewTeam';
import { overviewTeamProps } from '../../components/OverviewTeam/overviewTeamProps';
import Teammates from '../../components/Teammates';
import { teammatesListProps } from '../../components/Teammates/teammatesListProps';
import TournamentHistory from '../../components/TornamentHistory';
import { tournamentHistoryProps } from '../../components/TornamentHistory/tournamentHistoryProps';

const TeamPage = () => {
  return (
    <div className={style.teamPage}>
      <h2 className={style.title}>Team</h2>
      <FormCreateTeam />
      <OverviewTeam {...overviewTeamProps} />
      <Teammates {...teammatesListProps} />
      <TournamentHistory {...tournamentHistoryProps} />
    </div>
  );
};

export default TeamPage;

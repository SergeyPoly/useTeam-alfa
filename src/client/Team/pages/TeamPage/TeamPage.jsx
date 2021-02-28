import React from 'react';
import FormCreateTeam from '../../components/FormCreateTeam';
import style from './TeamPage.module.scss';

import Sidebar from '../../../../shared/containers/Sidebar';
import Achievements from '../../components/Achievements';
import achievementsProps from "../../components/achievementsProps"
import Heading from '../../../../shared/components/Heading';
import OverviewTeam from '../../components/OverviewTeam';
import { overviewTeamProps } from '../../components/OverviewTeam/overviewTeamProps';
import Teammates from '../../components/Teammates';
import { teammatesListProps } from '../../components/Teammates/teammatesListProps';
import TournamentHistory from '../../components/TornamentHistory';
import { tournamentHistoryProps } from '../../components/TornamentHistory/tournamentHistoryProps';


const TeamPage = () => {
    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements {...achievementsProps} />
        },
    ];

  return (
      <div className={style.teamPage}>
          <div className={`${style.teamPage__content} container`}>
              <div className={'column-3'}>
                  <Sidebar sidebarData={sidebarData}/>
              </div>
              <div className={'column-9'}>
                    <Heading type={"page"} text={"Team"}/>
                    {/*<FormCreateTeam />*/}
                    <OverviewTeam {...overviewTeamProps}/>
                    <Teammates {...teammatesListProps}/>
                    <TournamentHistory {...tournamentHistoryProps}/>
              </div>
          </div>
      </div>
  );
};

export default TeamPage;

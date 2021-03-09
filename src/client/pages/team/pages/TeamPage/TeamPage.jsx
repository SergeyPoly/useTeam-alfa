import React, { useEffect } from 'react';
import style from './TeamPage.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Achievements from '../../components/Achievements';
import achievementsProps from "../../components/achievementsProps"
import Heading from '../../../../../shared/components/Heading';
import { getOverviewTeamProps } from '../../components/OverviewTeam/getOverviewTeamProps';
import Teammates from '../../components/Teammates';
import { teammatesListProps } from '../../components/Teammates/teammatesListProps';
import TournamentHistory from '../../components/TornamentHistory';
import { tournamentHistoryProps } from '../../components/TornamentHistory/tournamentHistoryProps';
import { shallowEqual, useSelector } from 'react-redux';
import FormCreateTeam from '../../components/FormCreateTeam';
import Overview from '../../../../../shared/components/Overview';


const TeamPage = () => {
    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements {...achievementsProps} />
        },
    ];
    const team  = useSelector(state => state.auth.team, shallowEqual);
    console.log(team);

    const content = Object.keys(team).length ?  <>
                                                    <Overview {...getOverviewTeamProps(team)}/>
                                                    <Teammates {...teammatesListProps}/>
                                                    <TournamentHistory {...tournamentHistoryProps}/>
                                                </> : <FormCreateTeam />



  return (
      <div className={style.teamPage}>
          <div className={`${style.teamPage__content} container`}>
              <div className={'column-3'}>
                  <Sidebar sidebarData={sidebarData}/>
              </div>
              <div className={'column-9'}>
                    <Heading type={"page"} text={"Team"}/>
                    {content}
              </div>
          </div>
      </div>
  );
};

export default TeamPage;

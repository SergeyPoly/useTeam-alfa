import React, { useEffect } from 'react';
import style from './TeamPage.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Achievements from '../../components/Achievements';
import achievementsProps from "../../components/achievementsProps"
import Heading from '../../../../../shared/components/Heading';
import { getOverviewTeamProps } from '../../getOverviewTeamProps';
import Teammates from '../../components/Teammates';
import { teammatesListProps } from '../../components/Teammates/teammatesListProps';
import TournamentHistory from '../../components/TornamentHistory';
import {tournamentsHistoryData} from '../../components/TornamentHistory/tournamentsHistoryData';
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
    const team  = useSelector(({ auth }) => auth.team, shallowEqual);

    let tournamentHistoryProps=[];
    for (let i = 0; i < team.tournamentHistory.countLoading && i < team.tournaments.length ; i++){
        const {id, ...rest} = team.tournaments[i];
        const  tournament = tournamentsHistoryData.tournamentHistory.find( (tournament) => tournament.id ===id);
        tournamentHistoryProps[i] = {...rest, ...tournament};
    }
    // const tournamentHistoryProps = team.tournaments.map(({id, ...rest}) => {
    //     const  tournament = tournamentsHistoryData.tournamentHistory.find( (tournament) => tournament.id ===id);
    //     return {...rest, ...tournament};
    // })
    // console.log(tournamentHistoryProps);

    const content = Object.keys(team).length ?  <>
                                                    <Overview {...getOverviewTeamProps(team)}/>
                                                    <Teammates {...teammatesListProps}/>
                                                    <TournamentHistory tournamentHistory={tournamentHistoryProps}/>
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

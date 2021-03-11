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
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import FormCreateTeam from '../../components/FormCreateTeam';
import Overview from '../../../../../shared/components/Overview';
import {setTournamentsHistoryTeamData, setAchievementsTeamData} from "../../../../navbar/reducer/authReducer";
import {getTournamentHistory} from "../../components/TornamentHistory/getTournamentHistory";


const TeamPage = () => {

    const team  = useSelector(({ auth }) => auth.team, shallowEqual);
    const dispatch = useDispatch();
    const winTournaments = team.tournaments.length === 0 ? null : team.tournaments.filter( (tournament) => tournament.result ==="Winner");

    useEffect( () =>{
        const tournamentHistoryProps = getTournamentHistory(team.tournaments, team.tournamentHistory.countLoading);
        const achievements = getTournamentHistory(winTournaments, 5);
        dispatch(setTournamentsHistoryTeamData(tournamentHistoryProps));
        dispatch(setAchievementsTeamData(achievements));
    }, [team.tournamentHistory.countLoading])
    const { tournaments } = team.tournamentHistory;


    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements achievements={team.achievements} />
        },
    ];

    const content = Object.keys(team).length ?  <>
                                                    <Overview {...getOverviewTeamProps(team)}/>
                                                    <Teammates listTeammates={team.teammates}/>
                                                    <TournamentHistory tournaments={tournaments}/>
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

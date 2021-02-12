import React from 'react';
import FormCreateTeam from '../../components/FormCreateTeam';
import style from './TeamPage.module.scss';
import styles from '../../../Tournaments/pages/TournamentsPage/TournamentsPage.module.scss';
import Sidebar from '../../../../shared/containers/Sidebar';
import Achievements from '../../components/Achievements';


const TeamPage = () => {
    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements/>
        },
    ];

  return (
      <div className={style.teamPage}>
          <div className={`${style.teamPage__content} container`}>
              <div className={'column-3'}>
                  <Sidebar sidebarData={sidebarData}/>
              </div>
              <div className={'column-9'}>
                  <FormCreateTeam />
              </div>
          </div>
      </div>
  );
};

export default TeamPage;

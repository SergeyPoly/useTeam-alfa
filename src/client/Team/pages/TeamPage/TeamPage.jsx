import React from 'react';
import FormCreateTeam from '../../components/FormCreateTeam';
import style from './TeamPage.module.scss';

const TeamPage = () => {
  return (
    <div className={style.teamPage}>
      <h2 className={style.title}>Team</h2>
      <FormCreateTeam />
    </div>
  );
};

export default TeamPage;

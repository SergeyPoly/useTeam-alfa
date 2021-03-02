import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from './OverviewTeam.module.scss';
import PropTypes from 'prop-types';

const OverviewTeam = props => {
  const { teamName, teamLogo, teamStatistics } = props;

  const teamStatisticItems = teamStatistics.map(({ title, value }) => (
    <div className={style.teamStatisticItem}>
      <span className={style.teamStatisticTitle}>{title}</span>
      <span className={style.teamStatisticValue}>{value}</span>
    </div>
  ));

  return (
    <div className={style.team}>
      <Heading type="block" text="OverviewTeam" />
      <div className={style.teamBlock}>
        <img className={style.teamLogo} src={teamLogo} alt="logo team" />
        <div className={style.teamInfo}>
          <div className={style.teamNameWrapper}>
            <span className={style.teamName}>{teamName}</span>
            <button type="button" className={style.teamBtnEdit}>
              Edit team
            </button>
          </div>

          <div className={style.teamStatistic}>{teamStatisticItems}</div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTeam;

OverviewTeam.propTypes = {
  teamName: PropTypes.string,
  teamLogo: PropTypes.string,
  teamStatistics: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ),
};

OverviewTeam.defaultProps = {
  teamName: {},
  teamLogo: {},
  teamStatistics: [],
};

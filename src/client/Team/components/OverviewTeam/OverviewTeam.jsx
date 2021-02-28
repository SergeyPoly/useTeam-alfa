import React from 'react';
import Heading from '../../../../shared/components/Heading';
import style from './OverviewTeam.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../../shared/components/Button';

const OverviewTeam = props => {
  const { teamName, teamLogo, teamStatistics } = props;

  const teamStatisticItems = teamStatistics.map(({ title, value }) => (
    <div className={style.team__statisticItem}>
      <span className={style.team__statisticTitle}>{title}</span>
      <span className={style.team__statisticValue}>{value}</span>
    </div>
  ));

  return (
    <div className={style.team}>
      <Heading type="block" text="OverviewTeam" />
      <div className={style.team__block}>
        <img className={style.team__logo} src={teamLogo} alt="logo team" />
        <div className={style.team__info}>
          <div className={style.team__nameWrapper}>
            <span className={style.team__name}>{teamName}</span>
              <Button text={"Edit team"} classType={"outline"} additionalClass={style.team__button}/>
            {/*<button type="button" className={style.teamBtnEdit}>*/}
            {/*  Edit team*/}
            {/*</button>*/}
          </div>

          <div className={style.team__statistic}>{teamStatisticItems}</div>
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

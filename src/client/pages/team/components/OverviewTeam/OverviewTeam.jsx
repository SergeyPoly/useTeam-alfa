import React from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from './OverviewTeam.module.scss';
import PropTypes from 'prop-types';
import Button from '../../../../../shared/components/Button';
import defaultAvatar from  "../../../../../assets/images/team/defaultAvatar.png";

const OverviewTeam = props => {
  const { teamName, teamAvatar, teamStatistics } = props;

  const img = teamAvatar ? <img className={style.team__avatar} src={teamAvatar} alt="avatar team" /> : <img className={style.team__avatar} src={defaultAvatar} alt="avatar team" />

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
          {img}
        <div className={style.team__info}>
          <div className={style.team__nameWrapper}>
              <span className={style.team__name}>{teamName}</span>
              <Button text={"Edit team"} classType={"outline"} additionalClass={style.team__button}/>
          </div>
          <div className={style.team__statistic}>
              {teamStatisticItems}
          </div>
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

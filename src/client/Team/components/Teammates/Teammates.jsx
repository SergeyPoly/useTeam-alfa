import React from 'react';
import Heading from '../../../../shared/components/Heading';
import style from './Teammates.module.scss';
import Button from '../../../../shared/components/Button';
import PropTypes from 'prop-types';

const Teammates = props => {
  const { listTeammates } = props;
  const listTeammatesElem = listTeammates.map(
    ({ avatar, name, matches, tournaments, winrate, cups }) => (
      <div className={style.teammate}>
        <div className={style.teammateItem}>
          <img className={style.teammateAvatar} src={avatar} alt="" />
          <span className={style.teammateName}>{name}</span>
        </div>

        <span className={style.teammateItem}>{matches}</span>
        <span className={style.teammateItem}>{tournaments}</span>
        <span className={style.teammateItem}>{winrate}</span>
        <span className={style.teammateItem}>{cups}</span>
        <button className={style.teammateBtnKick}>kick</button>
      </div>
    ),
  );
  return (
    <div className={style.teammates}>
      <Heading type="block" text="Teammates" />
      <div className={style.teammatesBlock}>
        <div className={style.filter}>
          <span className={style.filterItem}>name</span>
          <span className={style.filterItem}>matches</span>
          <span className={style.filterItem}>tournaments</span>
          <span className={style.filterItem}>winrate</span>
          <span className={style.filterItem}>cups</span>
          <span className={style.filterItem}>kick</span>
        </div>
        <div className="listTeammates">{listTeammatesElem}</div>
      </div>
      <Button
        classType="outline"
        handleClick={() => {}}
        text="Load more"
        additionalClass={style.teammatesBtn}
      />
    </div>
  );
};

Teammates.propTypes = {
  listTeammates: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      matches: PropTypes.number,
      tournaments: PropTypes.number,
      winrate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cups: PropTypes.number,
    }),
  ),
};

Teammates.defaultProps = {
  listTeammates: [],
};

export default Teammates;

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import styles from './Invites.module.scss';
import Button from '../../../../shared/components/Button';
import teamAvatar from '../../../../assets/images/userProfile/team-avatar.jpg';

const Invites = props => {
  const { invites, setPopup, setTeam } = props;
  const [invitesState, setInvitesState] = useState([...invites]);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setInvitesState(state => [...state, ...invites]);
      setIsLoading(false);
    }, 1000);
  }; 

  const acceptTeam = () => {
      setTeam(true);
      setPopup(false);
  };

  const declineTeam = () => {
      setPopup(false);
  };

  const invitesElements = invitesState.map(
    ({ team, matches, tournaments, cups }, number) => (
      <tr className={styles.invitesItem} key={`${team}${number}`}>
        <td valign="middle">
          <img src={teamAvatar} alt={team} />
            <span>{team}</span>
        </td>
        <td>{matches}</td>
        <td>{tournaments}</td>
        <td>{cups}</td>
        <td>
          <button onClick={acceptTeam}>Accept</button>
        </td>
        <td>
          <button onClick={declineTeam}>Decline</button>
        </td>
      </tr>
    ),
  );

  const button = isLoading ? (
    <Loader
      type="TailSpin"
      color="#567EF7"
      height={25}
      width={25}
      timeout={1000}
    />
  ) : (
    <Button
      classType="outline"
      text="Load More"
      additionalClass={styles.loadMore}
      handleClick={loadMore}
    />
  );

  return useMemo(
    () => (
      <div className={styles.container}>
        <table className={styles.invites}>
          <tbody className={styles.container}>
            <tr className={styles.title}>
              <th>TEAM</th>
              <th>MATCHES</th>
              <th>TOURNAMENTS</th>
              <th>CUPS</th>
              <th>ACCEPT</th>
              <th>DECLINE</th>
            </tr>
            {invitesElements}
          </tbody>
        </table>
        <div className={styles.buttonContainer}>{button}</div>
      </div>
    ),
    [button, invitesElements],
  );
};

export default Invites;

Invites.propTypes = {
  invites: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ),
  ),
};

Invites.defaultProps = {
  invites: null,
};

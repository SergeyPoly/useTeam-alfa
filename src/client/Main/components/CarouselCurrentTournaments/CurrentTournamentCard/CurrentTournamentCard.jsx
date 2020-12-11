import React from 'react';
import { TournamentsData } from '../../../../../../../app/store/TournamentsData';
import { ThunderboltOutlined } from '@ant-design/icons';
import {
  CurrentTournamentCardStyle,
  flexRowStyle,
  CurrentTournamentCardBanner,
  CurrentTournamentCardName,
  CurrentTournamentCardDescription,
  CurrentTournamentCardGo,
  CurrentTournamentCardNamePrize,
  CurrentTournamentCardCheckIn,
  CurrentTournamentCardSlots,
  CurrentTournamentCardSum,
} from './CurrentTournamentCardStyle';

const CurrentTournamentCard = TournamentsData.filter(
  el => el.status === 'current',
).map(elem => {
  const currency =
    elem.prise_pool === 'Energy' ? (
      <ThunderboltOutlined
        style={{ marginTop: '5px', color: '#8B79FF', fontSize: '20px' }}
      />
    ) : (
      <h5 style={CurrentTournamentCardSum}>$</h5>
    );

  return (
    <div>
      <div style={CurrentTournamentCardStyle}>
        <div style={CurrentTournamentCardBanner(elem.url_for_card)}></div>
        <div style={CurrentTournamentCardDescription}>
          <div style={flexRowStyle}>
            <h2 style={CurrentTournamentCardName}>
              {elem.mode}
              {elem.name}
            </h2>
            <div style={CurrentTournamentCardNamePrize}>
              <span>Prize pool</span>
              <div style={flexRowStyle}>
                {currency}
                <h4 style={CurrentTournamentCardSum}>{elem.prise_sum}</h4>
              </div>
            </div>
          </div>

          <div style={flexRowStyle}>
            <h2 style={CurrentTournamentCardGo}>Going right now</h2>
            <div style={CurrentTournamentCardSlots}>
              <span>Slots</span>
              <h5 style={{ color: 'white' }}>1/{elem.slots}</h5>
            </div>
          </div>

          <div style={flexRowStyle}>
            <div>
              <button type="button">CheckIn</button>
            </div>
            <div style={CurrentTournamentCardCheckIn}>
              <span>Entry from</span>
              <div style={CurrentTournamentCardSum}>
                {currency}
                <h5 style={CurrentTournamentCardSum}>{elem.entry_from}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CurrentTournamentCard;

import React from 'react';
import Button from '../../../../../shared/components/Button/Button';
import { ThunderboltOutlined } from '@ant-design/icons';
import { GetTour } from '../../../pages/MainPage/pageProps;';
import './TourCard.scss';

const TourCard = GetTour('current').map(elem => {
  const currency =
    elem.prise_pool === 'Energy' ? (
      <ThunderboltOutlined style={{ color: '#8B79FF', fontSize: '20px' }} />
    ) : (
      <h5 className="tour-card--sum">$</h5>
    );

  const bannerStyle = { backgroundImage: `url(${elem.url_for_card})` };

  return (
    <div key={elem.id}>
      <div className="tour-card">
        <div className="tour-card--banner" style={bannerStyle}></div>
        <div className="tour-card--description">
          <div className="tour-card--name_container">
            <h2 className="tour-card--name">
              {elem.mode}
              {elem.name}
            </h2>
            <div className="tour-card--name_prize">
              <span>Prize pool</span>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {currency}
                <h4 className="tour-card--sum">{elem.prise_sum}</h4>
              </div>
            </div>
          </div>

          <div className="flex-row">
            <h2 className="tour-card--go">Going right now</h2>
            <div className="tour-card--slots">
              <span>Slots</span>
              <h5 style={{ color: 'white' }}>1/{elem.slots}</h5>
            </div>
          </div>

          <div className="flex-row">
            <div>
              <Button
                classType="basic"
                additionalClass="tour-card--button"
                text="CHECK In"></Button>
            </div>
            <div className="tour-card--checkIn">
              <span>Entry from</span>
              <div className="tour-card--sum">
                {currency}
                <h5 className="tour-card--sum">{elem.entry_from}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TourCard;

import React from 'react';
import Button from '../../../../../shared/components/Button/Button';
import { ReactComponent as Lightening } from '../../../../../assets/icons/lightening.svg';
import styles from './TourCard.module.scss';
import PropTypes from 'prop-types';

const TourCard = ({ elem }) => {
  const currency =
    elem.prise_pool === 'Energy' ? (
      <Lightening />
    ) : (
      <h5 className={styles.tour_card__sum}>$</h5>
    );

  const bannerStyle = { backgroundImage: `url(${elem.url_for_card})` };

  return (
    <div key={elem.id}>
      <div className={styles.tour_card}>
        <div className={styles.tour_card__banner} style={bannerStyle}></div>
        <div className={styles.tour_card__description}>
          <div className={styles.flex_row}>
            <h2 className={styles.tour_card__name}>
              {elem.mode}
              <span> </span>
              {elem.name}
            </h2>
            <div className={styles.tour_card__info}>
              <span className={styles.tour_card__text}>Prize pool</span>
              <div className={styles.tour_card__priseCurrency}>
                {currency}
                <h4 className={styles.tour_card__priseSum}>{elem.prise_sum}</h4>
              </div>
            </div>
          </div>

          <div className={styles.flex_row}>
            <h2 className={styles.tour_card__go}>Going right now</h2>
            <div className={styles.tour_card__info}>
              <span className={styles.tour_card__text}>Slots</span>
              <h5 className={styles.tour_card__slots}>1/{elem.slots}</h5>
            </div>
          </div>

          <div className={styles.tour_card__buttonSection}>
            <div>
              <Button
                classType="basic"
                additionalClass={styles.tour_card__button}
                text="CHECK In"></Button>
            </div>
            <div className={styles.tour_card__info}>
              <span className={styles.tour_card__text}>Entry from</span>
              <div className={styles.tour_card__sum}>
                {currency}
                <h5 className={styles.tour_card__sum}>{elem.entry_from}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

TourCard.propTypes = {
  elem: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  ),
};

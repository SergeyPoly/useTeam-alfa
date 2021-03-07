import React from 'react';
import SliderItem from '../SliderItem';
import styles from './SliderContainer.module.scss';
import PropTypes from 'prop-types';
import { GetTour } from '../../../../../main/pages/MainPage/pageProps;';
import { shallowEqual, useSelector } from 'react-redux';

const SliderContainer = ({ actualSlide }) => {
  let widthBreakPoints = 1260;
  const processedTournamentsData = useSelector(
    ({ tournaments }) => tournaments.processedTournamentsData,
    shallowEqual,
  );
  let sliderLength = processedTournamentsData.length * (widthBreakPoints + 3);

  const style = {
    width: `${sliderLength}px`,
    transform: `translate3d(${-actualSlide * widthBreakPoints}px, 0, 0)`,
  };

  const sliderItemsArr = processedTournamentsData.map((elem, index) => {
    const displaySlide = actualSlide === index ? 'visible ' : 'hidden ';
    return <SliderItem elem={elem} displaySlide={displaySlide} key={elem.id} />;
  });

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderItems} style={style}>
        {sliderItemsArr}
      </div>
    </div>
  );
};

export default SliderContainer;

SliderContainer.propTypes = {
  actualSlide: PropTypes.number,
};

SliderContainer.defaultProps = {
  actualSlide: 0,
};

import React, { useEffect, useState } from 'react';
import styles from './SectionTourList.module.scss';
import Heading from '../../../../shared/components/Heading';
import Loaders from '../../../../shared/components/Loaders';
import TourCard from './TourCard/TourCard';
import { GetTour } from '../../pages/MainPage/pageProps;';

const SectionTourList = () => {
  const [numCards, SetNumCards] = useState(4);
  const [visible, SetVisible] = useState(true);

  const addCards = () => {
    SetNumCards(numCards + 4);
  };

  useEffect(() => {
    if (numCards >= GetTour('current').length) {
      SetVisible(false);
    }
  }, [numCards]);

  const TourCards = GetTour('current').map((elem, i) => {
    if (i < numCards) {
      return <TourCard elem={elem} key={elem.id} />;
    }
  });

  return (
    <div>
      <Heading type={'section'} text={'Tournaments live'} additionalClass={styles.headTextTopDistance}/>
      <div className={styles.tourList}>{TourCards}</div>
      <Loaders func={addCards} visible={visible} />
    </div>
  );
};

export default SectionTourList;

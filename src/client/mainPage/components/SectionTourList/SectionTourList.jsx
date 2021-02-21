import React, { useEffect, useState } from 'react';
import styles from './SectionTourList.module.scss';
import Heading from '../../../../shared/components/Heading';
import Loaders from '../../../../shared/components/Loaders';
import TourCard from './TourCard/TourCard';
import { GetTour } from '../../pages/MainPage/pageProps;';
// import Loader from 'react-loader-spinner';
// import getData from '../../../../utils/Api';

const SectionTourList = () => {
  const [numCards, SetNumCards] = useState(4);
  const [visible, SetVisible] = useState(true);
  // const [isLoaded, SetIsLoaded] = useState(false);

  const addCards = () => {
    SetNumCards(numCards + 4);
  };

  useEffect(() => {
    if (numCards >= GetTour('current').length) {
      SetVisible(false);
    }
  }, [numCards]);

    const tourList = GetTour('current').map((elem, i) => {
      if (i < numCards) {
        return <TourCard elem={elem} key={elem.id} />;
      }
    })


  return (
    <div>
      <Heading
        type={'section'}
        text={'Tournaments live'}
        additionalClass={styles.headTextTopDistance}
      />
      <div className={styles.tourList}>{tourList}</div>
      <Loaders func={addCards} visible={visible} />
    </div>
  );
};

export default SectionTourList;

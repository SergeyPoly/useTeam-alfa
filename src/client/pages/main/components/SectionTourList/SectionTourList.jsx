import React, { useEffect, useState } from 'react';
import styles from './SectionTourList.module.scss';
import Heading from '../../../../../shared/components/Heading';
import Loaders from '../../../../../shared/components/Loaders';
// import { GetTour } from '../../pages/MainPage/pageProps;';

import { useSelector, shallowEqual } from 'react-redux';
import TournamentCard from '../../../../../shared/components/TournamentCard';

import Loader from 'react-loader-spinner';

const SectionTourList = () => {
  const [numCards, SetNumCards] = useState(4);
  const [visible, SetVisible] = useState(true);

  const isLoading = useSelector(({ api }) => api.isLoading, shallowEqual);
  const processedTournamentsData = useSelector(
    ({ tournaments }) => tournaments.processedTournamentsData,
    shallowEqual,
  );

  const addCards = () => {
    SetNumCards(numCards + 4);
  };

  useEffect(() => {
    if (numCards >= processedTournamentsData.length) {
      SetVisible(false);
    }
    else if ( numCards===4) {
      SetVisible(true);
    }
  }, [processedTournamentsData]);

  const tourList = isLoading ? (
    <div className={styles.tourLoader}>
      <Loader type="TailSpin" color="#567EF7" height={25} width={25} />
    </div>
  ) : (
    processedTournamentsData.map((elem, i) => {
      if (i < numCards) {
        return (
          <div style={{ padding: '11px 7px' }}>
              <TournamentCard {...elem} key={elem.id} />
          </div>
        );
      }
    })
  );

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

import React, { useEffect, useState } from 'react';
import styles from './SectionTourList.module.scss';
import Heading from '../../../../shared/components/Heading';
import Loaders from '../../../../shared/components/Loaders';
import TourCard from './TourCard/TourCard';
import { GetTour } from '../../pages/MainPage/pageProps;';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllTournaments } from '../../reducer/actions/getAllTournaments';
// import Loader from 'react-loader-spinner';
// import getData from '../../../../utils/Api';

const SectionTourList = () => {
  const [numCards, SetNumCards] = useState(4);
  const [visible, SetVisible] = useState(true);

  const dispatch = useDispatch();
  const { isLoading, TournamentsData } = useSelector(
    state => state.api,
    shallowEqual,
  );

  console.log(isLoading, TournamentsData);

  const addCards = () => {
    SetNumCards(numCards + 4);
  };

  useEffect(() => {
    const action = getAllTournaments('tournaments', [
      'championReward',
      'itemHeading',
    ]);
    dispatch(action);
    if (numCards >= GetTour('current').length) {
      SetVisible(false);
    }
  }, [numCards]);

  const tourList = GetTour('current').map((elem, i) => {
    if (i < numCards) {
      return <TourCard elem={elem} key={elem.id} />;
    }
  });

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

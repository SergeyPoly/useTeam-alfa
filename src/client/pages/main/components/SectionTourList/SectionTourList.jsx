import React, { useEffect, useState } from 'react';
import styles from './SectionTourList.module.scss';
import Heading from '../../../../../shared/components/Heading';
import Loaders from '../../../../../shared/components/Loaders';
import { GetTour } from '../../pages/MainPage/pageProps;';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getAllTournaments } from '../../reducer/actions/getAllTournaments';
import TournamentCard from '../../../../../shared/components/TournamentCard';

import Loader from 'react-loader-spinner';

const SectionTourList = () => {
  const [numCards, SetNumCards] = useState(4);
  const [visible, SetVisible] = useState(true);

  const dispatch = useDispatch();
  const { isLoading, TournamentsData } = useSelector(
    state => state.api,
    shallowEqual,
  );
  const addCards = () => {
    SetNumCards(numCards + 4);
  };

  useEffect(() => {
    const action = getAllTournaments('tournaments', [
      'url_for_card',
      'itemHeading',
      'prizePool',
      'slots',
      'id',
      'entry',
      'startTime',
    ]);
    dispatch(action);
      if (numCards >= GetTour().length) {
      SetVisible(false);
    }
  }, [numCards]);
  
  const tourList = isLoading ? (
    <div className={styles.tourLoader}>
      <Loader type="TailSpin" color="#567EF7" height={25} width={25} />
    </div>
  ) : (
    TournamentsData.map((elem, i) => {
      if (i < numCards) {
        return <TournamentCard elem={elem} key={elem.id} />;
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

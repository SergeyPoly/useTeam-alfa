import React, { useEffect } from 'react';
import Banner from '../../components/SectionBanner/components/Banner/Banner';
import SliderSection from '../../components/SliderSection';
import { pageProps } from './pageProps;';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import InfoList from '../../components/SectionBanner/components/InfoList';
import styles from './MainPage.module.scss';
import SectionTourList from '../../components/SectionTourList/SectionTourList';
import { tournamentsRequestCreator } from '../../../tournaments/reducers/tournamentsActionCreators';
import { useDispatch } from 'react-redux';
import { postAllPlayers, postAllTestUsers } from '../../reducer/actions/getAllTournaments';
// import {
//   getAllMatches,
//   getOneTournament,
//   getAllUsers,
//   postAllMatches,
//   postAllTournaments,
// } from '../../reducer/actions/getAllTournaments';

const MainPage = () => {
  const { sectionBannerEnticing, sectionBannerAdvantage } = pageProps;
  const dispatch = useDispatch();

  // postAllTournaments();
  // getAllUsers()+
  // postAllMatches()+*2
  // getAllMatches()
  // getOneTournament()
  

  useEffect(() => {
    // postAllPlayers()
    // postAllTestUsers()


    dispatch(
      tournamentsRequestCreator([
        'url_for_card',
        'url_for_banner',
        'terms',
        'itemHeading',
        'prizePool',
        'slots',
        'id',
        'entry',
        'startTime',
      ]),
    );
  }, []);

  return (
    <div className={`${styles.container} ${styles.mainPage}`}>
      <SliderSection />

      <SectionTourList />

      <SectionBanner
        title={sectionBannerEnticing.title}
        text={sectionBannerEnticing.text}>
        <Banner bgImage={sectionBannerEnticing.bg}>
          <InfoList />
        </Banner>
      </SectionBanner>

      <SectionBanner
        title={sectionBannerAdvantage.title}
        text={sectionBannerAdvantage.text}>
        <Banner bgImage={sectionBannerAdvantage.bg} />
      </SectionBanner>
    </div>
  );
};

export default MainPage;

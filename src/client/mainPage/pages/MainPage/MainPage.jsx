import React from 'react';
import Banner from '../../components/SectionBanner/components/Banner/Banner';
import SliderSection from '../../components/SliderSection';
import { pageProps } from './pageProps;';
import SectionBanner from '../../components/SectionBanner/SectionBanner';
import InfoList from '../../components/SectionBanner/components/InfoList';
import styles from './MainPage.module.scss';
import SectionTourList from '../../components/SectionTourList/SectionTourList';

const MainPage = () => {
  const { sectionBannerEnticing, sectionBannerAdvantage } = pageProps;

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

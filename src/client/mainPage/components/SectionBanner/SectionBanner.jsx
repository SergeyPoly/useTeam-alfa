import React from 'react';
import Button from '../../../../shared/components/Button/Button';
import Heading from '../../../../shared/components/Heading';
import styles from './SectionBanner.module.scss';
import PropTypes from 'prop-types'

const SectionBanner = ({ title, text, children }) => {
  return (
    <div className={styles.sectionBanner}>
      <Heading type={'section'} text={title} additionalClass={styles.headTextTopDistance}/>
      <div className={styles.sectionBannerContainer}>
        {children}
        <div className={styles.sectionBannerDescription}>
          <p className={styles.sectionBannerText}>{text}</p>
          <Button
            classType="basic"
            additionalClass={styles.sectionBannerButton}
            text="CHECK In"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;

SectionBanner.propTypes={
    title:PropTypes.string,
    text:PropTypes.string,
    children:PropTypes.element,
}

SectionBanner.defaultProps={
    title:'Why team better then solo play?',
    text:'Create your own team or join to your friends team',
    children:null,

}
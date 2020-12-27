import React from 'react';
import Button from '../../../../shared/components/Button/Button';
import './SectionBanner.scss';
import Heading from '../../../../shared/components/Heading';

const SectionBanner = ({ title, text,children }) => {
  return (
      <div className="section-banner">
          <Heading type={'section'} text={title}/>
          <div className="section-banner--container">
              {children}
              <div className="section-banner--description">
                  <p className="section-banner--text">{text}</p>
                  <Button
                      classType="basic"
                      additionalClass='section-banner--button'
                      text='CHECK In'
                  />
              </div>
          </div>
      </div>
  );
};

export default SectionBanner;

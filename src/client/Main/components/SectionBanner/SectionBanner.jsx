import React from 'react';
import Button from '../../../../shared/components/Button/Button';
import './SectionBanner.scss';

const SectionBanner = ({ title, text,children }) => {
  return (
    <div className="section-banner">
      <h2 className="title-style">{title}</h2>
      <div className="section-banner--container">
        {children}
        <div className="section-banner--description">
          <p className="section-banner--text">{text}</p>
          <Button classType="basic" additionalClass='section-banner--button' text='CHECK In'></Button>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;

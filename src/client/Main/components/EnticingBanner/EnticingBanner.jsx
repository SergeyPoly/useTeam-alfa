import React from 'react';
import EnticingUnit from './components/EnticingUnit';
import './EnticingBanner.scss';

const EnticingBanner = ({title, text, isUnitAvailable}) => {

  const classNameBannerBg = isUnitAvailable?'enticing-banner--bg':'enticing-banner----advantage'
  console.log(classNameBannerBg)

  return (
    <div className="enticing-banner">
      <h2 className="title-style">{title}</h2>
      <div className="enticing-banner--container">
        <div className="enticing-banner--bg">{isUnitAvailable&&EnticingUnit}</div>
        <div className="enticing-banner--description">
          <p className="enticing-banner--enticingText">{text}</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default EnticingBanner;

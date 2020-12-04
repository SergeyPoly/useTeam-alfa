import React from 'react';
import './EnticingBanner.scss';

const EnticingBanner = () => {
  return (
    <div className="enticing-banner">
      <h2 className="title-style">Why team better then solo play?</h2>
      <div className="enticing-banner--container">
        <div className="enticing-banner--bg" />
        <div className="enticing-banner--description">
          <p className="enticing-banner--enticingText">
            Create your own team or join to your friends team
          </p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default EnticingBanner;

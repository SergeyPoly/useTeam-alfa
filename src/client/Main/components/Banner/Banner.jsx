import React from 'react';

import './Banner.scss';

const Banner = ({ bgImage, children }) => {
  const style = { backgroundImage: `url(${bgImage})` };

  return (
    <div className="banner" style={style}>
      {children}
    </div>
  );
};

export default Banner;

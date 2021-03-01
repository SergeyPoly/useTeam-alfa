import React from 'react';
import styles from'./Banner.module.scss';

const Banner = ({ bgImage, children }) => {
  const style = { backgroundImage: `url(${bgImage})` };
  return (
    <div className={styles.banner} style={style}>
      {children}
    </div>
  );
};

export default Banner;

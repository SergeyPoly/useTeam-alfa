import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import styles from './Loaders.module.scss';
import Button from '../Button';

const Loaders = props => {
  const [isLoading, setIsLoading] = useState(false);
  const { func, visible } = props;
  const isButtonLoaderVisible = visible
    ? styles.loadMoreVisible
    : styles.loadMoreHide;

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      func();
      setIsLoading(false);
    }, 1000);
  };

  const button = isLoading ? (
    <Loader
      type="TailSpin"
      color="#567EF7"
      height={25}
      width={25}
      timeout={1000}
    />
  ) : (
    <Button
      classType="outline"
      text="Load More"
      additionalClass={isButtonLoaderVisible}
      handleClick={loadMore}
    />
  );

  return useMemo(() => <div className={styles.buttonContainer}>{button}</div>);
};

export default Loaders;

Loaders.propTypes = {
  visible: PropTypes.bool,
  func:PropTypes.func,
};

Loaders.defaultProps = {
  visible: true,
  func:null,
};
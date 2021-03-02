import React from 'react';
import { InfoListData } from '../../../../../../mainPage/pages/MainPage/pageProps;';

import styles from './InfoList.module.scss';

const InfoList = () => {
  const InfoListUnit = InfoListData.map(({ name, description, id }) => {
    return (
      <div className={styles.infoListContainer} key={id}>
        <p className={styles.infoListText}>{name}</p>
        <p className={styles.infoListDescription}>{description}</p>
      </div>
    );
  });
  return <div className={styles.infoList}>{InfoListUnit}</div>;
};

export default InfoList;


import React from 'react';
import { InfoListData } from '../../../../pages/MainPage/pageProps;';
import './InfoList.scss';

const InfoList = () => {
  const InfoListUnit = InfoListData.map(({ name, description }) => {
    return (
      <div className="info-list--container">
        <p className="info-list--text">{name}</p>
        <p className="info-list--description">{description}</p>
      </div>
    );
  });
  return <div className="info-list">{InfoListUnit}</div>;
};

export default InfoList;

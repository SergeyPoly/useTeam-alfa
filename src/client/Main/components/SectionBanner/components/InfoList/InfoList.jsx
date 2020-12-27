import React from 'react';
import { InfoListData } from '../../../../pages/MainPage/pageProps;';
import './InfoList.scss';

const InfoList = () => {
  const InfoListUnit = InfoListData.map(({ name, description,id }) => {
    return (
      <div className="info-list--container" key={id}>
        <p className="info-list--text">{name}</p>
        <p className="info-list--description">{description}</p>
      </div>
    );
  });
  return <div className="info-list">{InfoListUnit}</div>;
};

export default InfoList;

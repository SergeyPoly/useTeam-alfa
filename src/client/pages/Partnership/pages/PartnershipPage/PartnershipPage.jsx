import React from 'react';
import styles from './PartnershipPage.module.scss'

import Sidebar from '../../../../../shared/containers/Sidebar';
import PartnerInfo from "../../components/PartnerInfo";
import Heading from "../../../../../shared/components/Heading";
import partnerProfileProps from '../../partnerProfileProps'
import FeatureList from "../../components/FeatureList";
import Offer from "../../components/Offer";
import Bar from "../../components/Bar";



const PartnershipPage = () => {
    const sidebarData = [
{
    headingText: '5x5 Tournaments',
    Component: <Bar />
},
];

return (
<div className={styles.tournaments_page}>
    <div className={`${styles.tournaments_page__content} container`}>
        <div className={'column-3'}>
            <Sidebar sidebarData={sidebarData}/>
        </div>
        <div className={'column-9'}>
            <Heading type={'page'} text='Partnership'/>
            <PartnerInfo partnerProfileProps={partnerProfileProps}/>
            <Offer />
            <FeatureList />
        </div>
    </div>
</div>
);
};

export default PartnershipPage;

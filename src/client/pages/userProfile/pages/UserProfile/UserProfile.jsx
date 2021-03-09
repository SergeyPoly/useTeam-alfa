import React from 'react';
import Achievements from '../../../team/components/Achievements';
import achievementsProps from '../../../team/components/achievementsProps';
import style from '../../../team/pages/TeamPage/TeamPage.module.scss';
import Sidebar from '../../../../../shared/containers/Sidebar';
import Heading from '../../../../../shared/components/Heading';



const UserProfile = () => {
    const sidebarData = [
        {
            headingText: 'Achievements',
            Component: <Achievements {...achievementsProps} />
        },
    ];



    return (
        <div className={style.userPage}>
            <div className={`${style.userPage__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <Heading type={"page"} text={"Profile"}/>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;

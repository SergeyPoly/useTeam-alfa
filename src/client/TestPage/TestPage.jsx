import React from 'react';
import styles from './TestPage.module.scss'
import Sidebar from '../../shared/containers/Sidebar';
import Button from '../../shared/components/Button';
import Heading from '../../shared/components/Heading';

const TestPage = () => {

    const sidebarData = [
        {
            headingText: '5x5 Tournaments',
            Component: <Button text={'test'} classType={'basic'}/>
        },
        {
            headingText: '1x1 Tournaments',
            Component:
                <div>
                    <Heading type={'block'} text={'test'}/>
                    <Heading type={'block'} text={'test'}/>
                    <Heading type={'block'} text={'test'}/>
                    <Button text={'test'} classType={'basic'}/>
                </div>,
        },
    ];

    return (
        <div className={styles.test_page}>
            <div className={`${styles.test_page__content} container`}>
                <div className={'column-3'}>
                    <Sidebar sidebarData={sidebarData}/>
                </div>
                <div className={'column-9'}>
                    <span>SOME CONTENT</span>
                </div>
            </div>
        </div>
    );
};

export { TestPage };

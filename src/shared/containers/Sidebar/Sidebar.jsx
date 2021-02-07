import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Heading from '../../components/Heading';

import './Sidebar.scss'

const Sidebar = ({sidebarData}) => {

    const items = sidebarData.map(({headingText, Component}) =>
        <div key={v4()}>
            <Heading type='sidebar' text={headingText}/>
            <div className="sidebar-container">
                {Component}
            </div>
        </div>
    );

    return (
        <aside className='sidebar'>
            {items}
        </aside>
    );
};

export default Sidebar;

Sidebar.propTypes = {
    sidebarData: PropTypes.arrayOf(
        PropTypes.shape({
            headingText: PropTypes.string.isRequired,
            Component: PropTypes.element.isRequired,
        })
    ).isRequired,
};

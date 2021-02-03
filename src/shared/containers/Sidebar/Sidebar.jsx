import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../components/Heading';

import './Sidebar.scss'

const Sidebar = ({sidebarData}) => {

    const items = sidebarData.map(({headingText, Component}) =>
        <div>
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

Sidebar.defaultProps = {

};

Sidebar.propTypes = {

};

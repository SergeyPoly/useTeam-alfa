import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Heading from '../../components/Heading';

import './Table.scss'

const Table = ({tableData, children}) => {

    const {headingText, tableColTitles, winMarker, maxWidth} = tableData;
    const tableHeading = headingText ?
        <Heading
            type={'block'}
            text={headingText}
            additionalClass={winMarker ? 'win-marker' : ''}
        /> : null;
    const tableColTitle = tableColTitles.map(element => <span key={v4()} >{element}</span>);

    return (
        <div style={{maxWidth}}>
            {tableHeading}
            <div className={'table-container'}>
                <div className={'table-col-title'} style={{display: 'grid', gridTemplateColumns: `repeat(${tableColTitles.length}, 1fr)`}}>
                    {tableColTitle}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Table;

Table.defaultProps = {
    headingText: '',
    winMarker: false,
    maxWidth: '100%'
};

Table.propTypes = {
    children: PropTypes.element.isRequired,
    tableData: PropTypes.shape({
        headingText: PropTypes.string,
        winMarker: PropTypes.bool,
        tableColTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
        maxWidth: PropTypes.string
    }).isRequired,
};

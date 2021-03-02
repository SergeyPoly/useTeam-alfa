import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import Heading from '../../components/Heading';

import './Table.scss'

const Table = ({tableData, children}) => {

    const {headingText, tableColTitles, winMarker, winMarkerElement, maxWidth} = tableData;
    const tableHeading = headingText ?
        <Heading
            type={'block'}
            text={headingText}
            additionalClass={winMarker ? 'inline-block' : ''}
        /> : null;
    const tableColTitle = tableColTitles.map(({name, sorter}) => {
        return (
            sorter ?
                <span key={v4()} onClick={() => sorter()} className='sortable'>{name}</span> :
                <span key={v4()}>{name}</span>
        );
    });

    return (
        <div style={{maxWidth}}>
            <div>
                {tableHeading}
                {winMarker ? winMarkerElement : null}
            </div>
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
        winMarkerElement: PropTypes.element,
        tableColTitles: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            sorter: PropTypes.func
        })).isRequired,
        maxWidth: PropTypes.string
    }).isRequired,
};

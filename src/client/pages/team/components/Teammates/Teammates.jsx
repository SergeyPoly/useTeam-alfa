import React, { useState } from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from './Teammates.module.scss';
import Button from '../../../../../shared/components/Button';
import PropTypes from 'prop-types';
import Table from '../../../../../shared/containers/Table';
import { v4 } from 'uuid';


const Teammates = props => {
  const { listTeammates } = props;
    const [listItem, setListItem] = useState(listTeammates);
    const sorterName = () => {
        const sorted = [...listItem];
        sorted.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        setListItem(sorted);
    };

    const resultTableData = {
        headingText: 'Teammates',
        winMarker: false,
        tableColTitles: [
            {
                name: 'players',
                // sorter: sorterName,
            },
            { name: 'matches' },
            { name: 'tournaments' },
            { name: 'winrate' },
            {
                name: 'cups',
                // sorter: sorterDMG,
            },
            { name: 'kick' },
        ],
        maxWidth: '764px',
    };

  const listTeammatesElem = listTeammates.map(
    ({ avatar, name, matches, tournaments, winrate, cups }) => (
      <div className={style.teammate}>
        <div className={style.teammate__item}>
          <img className={style.teammate__avatar} src={avatar} alt="" />
          <span className={style.teammate__name}>{name}</span>
        </div>

        <span className={style.teammate__item}>{matches}</span>
        <span className={style.teammate__item}>{tournaments}</span>
        <span className={style.teammate__item}>{winrate}</span>
        <span className={style.teammate__item}>{cups}</span>
        <button className={style.teammate__btnKick}>kick</button>
      </div>
    ),
  );
  const resultRows =    <div>
                            {listTeammatesElem}
                        </div>
  return (
    <div className={style.teammates}>
        <Table tableData={resultTableData}>
            {/*<ResultTableItems rowsData={resultRows} />*/}
            {resultRows}
        </Table>
      <Button
        classType="outline"
        handleClick={() => {}}
        text="Load more"
        additionalClass={style.teammates__btn}
      />
    </div>
  );
};

Teammates.propTypes = {
  listTeammates: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      matches: PropTypes.number,
      tournaments: PropTypes.number,
      winrate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cups: PropTypes.number,
    }),
  ),
};

Teammates.defaultProps = {
  listTeammates: [],
};

export default Teammates;

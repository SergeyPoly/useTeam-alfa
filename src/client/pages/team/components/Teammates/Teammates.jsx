import React, { useState } from 'react';
import Heading from '../../../../../shared/components/Heading';
import style from './Teammates.module.scss';
import Button from '../../../../../shared/components/Button';
import PropTypes from 'prop-types';
import Table from '../../../../../shared/containers/Table';
import { v4 } from 'uuid';
import {setSortedTeammates} from'../../../../navbar/reducer/authReducer';
import { useDispatch } from 'react-redux';


const Teammates = props => {
    const { listTeammates } = props;
    const [listItem, setListItem] = useState(listTeammates);
    const [countLoading, setCountLoading] =useState(5);
    const dispatch = useDispatch();
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
                sorter: sorterName,
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


    let listTeammatesElem =[]
    for(let i=0; i<countLoading && i<listTeammates.length; i++){
        const { avatarImg, name, statistics, id } =listTeammates[i]
        listTeammatesElem[i] = (
                <div className={style.teammate}>
                    <div className={style.teammate__item}>
                        <img className={style.teammate__avatar} src={avatarImg} alt="" />
                        <span className={style.teammate__name}>{name}</span>
                    </div>

                    <span className={style.teammate__item}>{statistics.matches}</span>
                    <span className={style.teammate__item}>{statistics.tournaments}</span>
                    <span className={style.teammate__item}>{statistics.winrate}</span>
                    <span className={style.teammate__item}>{statistics.cups}</span>
                    <button
                        onClick={ () => {
                            const newTeammates = kickPlayer(id);
                            console.log(id);
                            dispatch(setSortedTeammates(newTeammates))
                        }}
                        className={style.teammate__btnKick} >
                        kick
                    </button>
                </div>
            )
    }

    const resultRows =    <div>
                            {listTeammatesElem}
                        </div>

    const kickPlayer = (id)=>{
        const newTeammates = listTeammates.filter( player => player.id!==id );
        console.log(newTeammates);
        return newTeammates
    }
  return (
    <div className={style.teammates}>
        <Table tableData={resultTableData}>
            {/*<ResultTableItems rowsData={resultRows} />*/}
            {resultRows}
        </Table>
      <Button
        classType="outline"
        handleClick={() => setCountLoading(countLoading+5)}
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
        statistics: PropTypes.objectOf(PropTypes.string),
    }),
  ),
};

Teammates.defaultProps = {
  listTeammates: [],
};

export default Teammates;

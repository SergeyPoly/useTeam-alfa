import React from 'react';
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import style from './Overview.module.scss';
import PropTypes from 'prop-types';
import defaultAvatar from  "../../../assets/images/team/defaultAvatar.png";

const Overview = props => {
    const {name, avatar, statistics, button } = props;

    const img = avatar ? <img className={style.overview__avatar} src={avatar} alt="avatar team" /> : <img className={style.overview__avatar} src={defaultAvatar} alt="avatar" />

    const statisticItems = statistics.map(({ title, value }) => (
        <div className={style.overview__statisticItem} key={title}>
            <span className={style.overview__statisticTitle}>{title}</span>
            <span className={style.overview__statisticValue}>{value}</span>
        </div>
    ));

    return (
        <div className={style.overview}>
            <Heading type="block" text="OverviewTeam" />
            <div className={style.overview__block}>
                {img}
                <div className={style.overview__info}>
                    <div className={style.overview__nameWrapper}>
                        <span className={style.overview__name}>{name}</span>
                        <Button text={button} classType={"outline"} additionalClass={style.overview__button}/>
                    </div>
                    <div className={style.overview__statistic}>
                        {statisticItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;

Overview.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    statistics: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        ),
    ),
    button: PropTypes.string
};

Overview.defaultProps = {
    name: {},
    avatar: {},
    statistics: [],
    button: "Edit"
};

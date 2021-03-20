import React from "react"
import EventItem from "../EventItem";
import styles from "./EventList.module.scss"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

const EventsList = ({eventsProps}) => {
    const tournaments = useSelector(({tournaments}) => tournaments.processedTournamentsData, shallowEqual);
    const events = tournaments.length > 0 ? tournaments.map(({url_for_card}) => <EventItem key={url_for_card} event={url_for_card}/>) : null;
    return (
        <div className={styles.eventList}>
            {events}
        </div>
    )
}

export default EventsList

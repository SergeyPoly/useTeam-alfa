import React from "react"
import EventItem from "../EventItem";
import styles from "./EventList.module.scss"

const EventsList = ({eventsProps}) => {
    const events = eventsProps.map(item => <EventItem key={item} event={item}/>);
    return (
        <div className={styles.eventList}>
            {events}
        </div>
    )
}

export default EventsList

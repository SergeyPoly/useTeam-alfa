import React from "react";
import styles from "./EventItem.module.scss"

const EventItem = ({event}) => {

    return(
        <div className={styles.eventItem}>{event}</div>
    )
}
export default EventItem

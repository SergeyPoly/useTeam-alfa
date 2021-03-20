import React from "react";
import styles from "./EventItem.module.scss"

const EventItem = ({event}) => {

    return(
        <img className={styles.eventItem} src={event}/>
    )
}
export default EventItem

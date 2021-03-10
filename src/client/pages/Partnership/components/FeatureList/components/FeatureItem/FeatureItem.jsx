import React from "react";
import styles from "./FeatureItem.module.scss"
import {Img} from "react-image";

const FeatureItem = ({props}) => {
    const {name, text, image, link} = props;
    return(
        <div className={styles.featureItem}>
            <Img
                className={styles.featureImg}
                src={image}
                alt={`It's partner ${name}`}
            />
            <div className={styles.featureText}>
                <div className={styles.featureTitle}>{name}</div>
                <div className={styles.featureDescr}>{text}</div>
                <div className={styles.featureLink}>{link}</div>
            </div>

        </div>
    )
}

export default FeatureItem

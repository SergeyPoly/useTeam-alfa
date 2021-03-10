import React from "react"
import Heading from "../../../../../shared/components/Heading";
import styles from "./PartnerInfo.module.scss"
import {Img} from "react-image";


const PartnerInfo = ({partnerProfileProps}) => {
    const {partnerName, link, matches, events, src} = partnerProfileProps;

    return (
        <div className={styles.partnerContainerOverview}>
            <Heading type={'block'} text='Overview'/>
            <div className={styles.partnerContainer}>
                <Img className={styles.picSmall}
                    src={src}
                    alt={`It's partner ${partnerName}`}
                />
                <div className={styles.partnerTextWrapper}>
                    <div className={styles.partnerTextItem}>
                        <span>Brandname</span>
                        <span>{partnerName}</span>
                    </div>


                    <div className={styles.partnerTextItem}>
                        <span>Link</span>
                        <span>{link}</span>
                    </div>
                    <div className={styles.partnerMoreInfo}>
                        <div className={styles.partnerTextItem}>
                            <span>matches</span>
                            <span>{matches}</span>
                        </div>
                        <div className={styles.partnerTextItem}>
                            <span>events</span>
                            <span>{events}</span>
                        </div>
                    </div>
                </div>
                <button type="button" className={styles.editProfileButton} >
                    EDIT PROFILE
                </button>
            </div>
        </div>
    );
}
export default PartnerInfo

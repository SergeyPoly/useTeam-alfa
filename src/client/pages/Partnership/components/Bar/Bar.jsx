import React, {useState} from "react";
import {Img} from "react-image";
import partnerAvatar from "../../../../../assets/images/partner/s1.png";
import partnerAvatarSmall from "../../../../../assets/images/partner/s2.png";
import styles from "./Bar.module.scss"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


const Bar = (status) => {

    const{activeStatus, setActiveStatus} = useState(status);
    const checkStatus = (activeStatus) => activeStatus ? styles.notActive : "";


    return (
        <div className={styles.bar}>
            <div className={styles.partner}>
                <p className={styles.text}>Title partner (250x250px)</p>
                <Img className={`${checkStatus(activeStatus)}`}  src={partnerAvatar} alt={`image`} />
            </div>
            <div className={styles.partner}>
                <p className={styles.text}>Partner (250x120px)</p>
                <Img className={`${checkStatus(!activeStatus)}`} src={partnerAvatarSmall} alt={`image`} />
            </div>

        </div>

)}
export default Bar

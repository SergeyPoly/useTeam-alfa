import React, {useState, useEffect} from "react";
import {Img} from "react-image";
import styles from "./Bar.module.scss"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const Bar = ({partnerProfileProps}) => {

    const {link, src, srcSmall} = partnerProfileProps;
    const status = useSelector(({partners}) => partners.status, shallowEqual);

    const titleCheckStatus = (status) => status === "sub" ? styles.notActive : "";
    const subCheckStatus = (status) => status === "title" ? styles.notActive : "";



    return (
        <div className={styles.bar}>
            <div className={styles.partner}>
                <p className={styles.text}>Title partner (250x250px)</p>
                <Img className={titleCheckStatus(status)}  src={src} alt={`image`} />
            </div>
            <div className={styles.partner}>
                <p className={styles.text}>Partner (250x120px)</p>
                <Img className={subCheckStatus(status)} src={srcSmall} alt={`image`} />
            </div>

        </div>

)}
export default Bar
